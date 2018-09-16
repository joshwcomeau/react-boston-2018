// @flow
/**
 * This utility component can make its children appear from (or disappear to)
 * a given target HTMLElement.
 */
import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import styled from 'styled-components';

import {
  getPositionDelta,
  createAugmentedClientRect,
  createAugmentedClientRectFromMinimumData,
} from './Transport.helpers';
import type {
  AugmentedClientRect,
  MinimumFixedPosition,
} from './Transport.types';

type Quadrant = 1 | 2 | 3 | 4;

export type Status = 'open' | 'closed' | 'retracted';

type SpringSettings = {
  stiffness?: number,
  damping?: number,
  precision?: number,
};

type Props = {
  children: React$Node,
  from: HTMLElement,
  to: HTMLElement,
  status: Status,
  springOpenHorizontal: SpringSettings,
  springOpenVertical: SpringSettings,
  springCloseHorizontal: SpringSettings,
  springCloseVertical: SpringSettings,
  windowWidth: number,
  windowHeight: number,
  handleFinishTransportation?: () => any,
};

type State = {
  inTransit: boolean,
  position: {
    top: ?number,
    left: ?number,
    right: ?number,
    bottom: ?number,
    translateX: number,
    translateY: number,
    scaleX: number,
    scaleY: number,
    transformOrigin: ?string,
  },
};

class Transport extends Component<Props, State> {
  static defaultProps = {
    springOpenHorizontal: { stiffness: 150, damping: 20 },
    springOpenVertical: { stiffness: 200, damping: 20 },
    springCloseHorizontal: { stiffness: 150, damping: 22 },
    springCloseVertical: { stiffness: 150, damping: 25 },
  };

  childWrapperNode: HTMLElement;
  fromRect: ?AugmentedClientRect;
  toRect: ?AugmentedClientRect;
  childRect: ?AugmentedClientRect;

  state = {
    inTransit: false,
    position: {
      top: null,
      left: null,
      right: null,
      bottom: null,
      scaleX: 0,
      scaleY: 0,
      translateX: 0,
      translateY: 0,
      transformOrigin: null,
    },
  };

  componentWillReceiveProps(nextProps: Props) {
    const { from, to, windowWidth, windowHeight } = nextProps;

    if (!nextProps.from || !nextProps.to || !this.childWrapperNode) {
      return;
    }

    const wasJustToggled = this.props.status !== nextProps.status;

    // HACK: So, it's currently possible for the parent to have the status
    // change from 'retracted' to 'closed'. While this is technically a new
    // state, it should not affect the Transport.
    // A PROPER fix would be to add some sort of FSM to control the changes
    // allowed between statuses, but for now I'm tackling it here, by just
    // ignoring any updates where neither status is `open`.
    if (this.props.status !== 'open' && nextProps.status !== 'open') {
      return;
    }

    if (wasJustToggled) {
      this.fromRect = createAugmentedClientRect(
        from,
        windowWidth,
        windowHeight
      );
      this.toRect = createAugmentedClientRect(to, windowWidth, windowHeight);
      this.childRect = createAugmentedClientRect(
        this.childWrapperNode,
        windowWidth,
        windowHeight
      );

      const initialPositionState = this.getInitialPositionState(
        nextProps.status
      );

      this.setState(
        {
          position: initialPositionState,
        },
        this.playAnimation
      );
    }
  }

  getInitialPositionState(status: Status) {
    const { fromRect, toRect, childRect } = this;

    if (!fromRect || !toRect || !childRect) {
      throw new Error('Tried to get position without necessary rects!');
    }

    // We want to position the element relative to the relevant node.
    // For opening, this is the "from" node. For closing, this is the "to" node.
    const relativeRect = status === 'closed' ? toRect : fromRect;

    // Figure out which of the 4 quarters of the screen our child is moving
    // to or from.
    const quadrant: Quadrant = this.getQuadrant(relativeRect);

    // The `transform-origin` of our child during transit.
    const transformOrigin = this.getTransformOrigin(quadrant, status);

    // The "minimum position" is what we need to know for our child's new home.
    // Consists of either a `top` or a `down`, and a `left` or a `right`.
    // Unlike ClientRect, these are the values in `position: fixed` terms, and
    // so the `right` value is the number of pixels between the element and the
    // right edge of the viewport.
    const minimumPositionData = this.getChildPosition(
      quadrant,
      relativeRect,
      status
    );

    // Because our animations use CSS transforms, we need to convert our
    // fixed-position coords into an AugmentedClientRect
    const pendingChildRect = createAugmentedClientRectFromMinimumData(
      minimumPositionData,
      childRect.width,
      childRect.height,
      this.props.windowWidth,
      this.props.windowHeight
    );

    const { translateX, translateY } = this.getTranslate(
      status,
      pendingChildRect
    );

    return {
      ...minimumPositionData,
      translateX,
      translateY,
      scaleX: this.state.position.scaleX,
      scaleY: this.state.position.scaleY,
      transformOrigin,
    };
  }

  playAnimation = () => {
    const { status } = this.props;

    this.setState({
      inTransit: true,
      position: {
        ...this.state.position,
        translateX: 0,
        translateY: 0,
        scaleX: status === 'open' ? 1 : 0,
        scaleY: status === 'open' ? 1 : 0,
      },
    });
  };

  finishPlaying = () => {
    this.setState({ inTransit: false });

    if (typeof this.props.handleFinishTransportation === 'function') {
      this.props.handleFinishTransportation();
    }
  };

  getQuadrant(targetRect: ?AugmentedClientRect): Quadrant {
    const { windowWidth, windowHeight } = this.props;

    // When expanding from something, we want to use its "opposite" corner.
    // Imagine we divide the screen into quadrants:
    //  ___________
    // |  1  |  2  |
    // |-----|-----|
    // |  3  |  4  |
    // ------------
    //
    // If the target element is in the top-left quadrant (#2), we want to open
    // the children from its bottom-right corner. This way, the expande item is
    // most likely to fit comfortably on the screen:
    //
    // ------------------------------|
    //                    | target | |
    //                    /--------  |
    //        ----------/            |
    //       | children |            |
    //        ----------             |
    // ______________________________|

    if (!targetRect) {
      throw new Error('Could not calculate quadrant, no targetRect given');
    }

    const windowCenter = {
      x: windowWidth / 2,
      y: windowHeight / 2,
    };

    if (targetRect.centerY < windowCenter.y) {
      // top half, left or right
      return targetRect.centerX < windowCenter.x ? 1 : 2;
    } else {
      // bottom half, left or right
      return targetRect.centerX < windowCenter.x ? 3 : 4;
    }
  }

  getTranslate(status: Status, pendingChildRect: AugmentedClientRect) {
    /**
     * This component uses the FLIP technique.
     *
     * When our open status changes, we move the node using fixed positioning
     * to the `to` node, and then we "invert" that effect by applying an
     * immediate, opposite translation.
     *
     * This method calculates that by comparing the child rect held in state
     * with the "pending" childRect, which is about to be applied.
     */
    const { childRect: currentChildRect } = this;

    if (!currentChildRect) {
      throw new Error('Animation started without necessary childRect!');
    }

    // We don't have any translation on-open.
    // Might change this later, if we add spacing support.
    if (status === 'open' || status === 'retracted') {
      return { translateX: 0, translateY: 0 };
    }

    const [x, y] = getPositionDelta(currentChildRect, pendingChildRect);
    return { translateX: x, translateY: y };
  }

  getTransformOrigin(quadrant: Quadrant, status: Status) {
    // If we're going "to" the target, we want to disappear into its center.
    // For this reason, the transform-origin will always be the middle.
    if (status === 'closed') {
      return 'center center';
    }

    // If we're coming "from" the target, the transform-origin depends on the
    // quadrant. We want to expand outward from the element, after all.
    switch (quadrant) {
      case 1:
        return 'top left';
      case 2:
        return 'top right';
      case 3:
        return 'bottom left';
      case 4:
        return 'bottom right';
      default:
        throw new Error(`Unrecognized quadrant: ${quadrant}`);
    }
  }

  getChildPosition(
    quadrant: Quadrant,
    targetRect: AugmentedClientRect,
    status: Status
  ): MinimumFixedPosition {
    /**
     * Get the fixed position for the child, calculated using the target rect
     * for reference.
     *
     * This depends on two factors:
     *
     * 1. QUADRANT
     *     The quadrant affects how the child will be positioned relative to the
     *     target. In the first quadrant (top-left), the box opens from the
     *     target's bottom-right corner:
     *      _____
     *     |  T  |
     *     |_____| _____                     T = target
     *            |  C  |                    C = child
     *            |_____|
     *
     *     When we're in the second quadrant, though, the child opens to the
     *     _left_ of the target:
     *                                                         _____
     *                                                        |  T  |
     *                                                  _____  -----
     *                                                |  C  |
     *                                                 -----
     *     Effectively, each quadrant causes the child to open from the target's
     *     _opposite corner_. This is to ensure that the child opens on-screen
     *     (if it always opened to the top-right, and the target was also in
     *     the top-right corner, it would render outside of the viewport).
     *
     * 2. STATUS
     *     When about to 'open' the child, we want to align the child with the
     *     target's opposite corner (as shown in 1. QUADRANT).
     *     When the direction is `to`, though, we want to align the target's
     *     center-point to the child's center-point:
     *
     *     `from`:
     *      _______
     *     |       |
     *     |   T   |
     *     |       |                        T = target
     *      ------- ___                     C = child
     *             | C |
     *              ---
     *
     *     `to`:
     *      _______
     *     |  ___  |
     *     | | C | |
     *     |  ---  |
     *      -------
     *
     *     This has to do with the intended effect: the child should grow from
     *     the target's corner, but it should shrink into the target's center.
     */
    const { childRect } = this;

    if (!childRect) {
      throw new Error("childRect doesn't exist");
    }

    const orientRelativeToCorner = status === 'open' || status === 'retracted';

    switch (quadrant) {
      case 1:
        return {
          top: orientRelativeToCorner
            ? targetRect.bottom
            : targetRect.centerY - childRect.height / 2,
          left: orientRelativeToCorner
            ? targetRect.right
            : targetRect.centerX - childRect.width / 2,
        };
      case 2:
        return {
          top: orientRelativeToCorner
            ? targetRect.bottom
            : targetRect.centerY - childRect.height / 2,
          right: orientRelativeToCorner
            ? targetRect.fromBottomRight.left
            : targetRect.fromBottomRight.centerX - childRect.width / 2,
        };
      case 3:
        return {
          bottom: orientRelativeToCorner
            ? targetRect.fromBottomRight.top
            : targetRect.fromBottomRight.centerY - childRect.height / 2,
          left: orientRelativeToCorner
            ? targetRect.right
            : targetRect.centerX - childRect.width / 2,
        };
      case 4:
        return {
          bottom: orientRelativeToCorner
            ? targetRect.fromBottomRight.top
            : targetRect.fromBottomRight.centerY - childRect.height / 2,
          right: orientRelativeToCorner
            ? targetRect.fromBottomRight.left
            : targetRect.fromBottomRight.centerX - childRect.width / 2,
        };
      default:
        throw new Error(`Unrecognized quadrant: ${quadrant}`);
    }
  }

  render() {
    const {
      status,
      children,
      springOpenHorizontal,
      springOpenVertical,
      springCloseHorizontal,
      springCloseVertical,
    } = this.props;
    const { position, inTransit } = this.state;

    const {
      top,
      left,
      right,
      bottom,
      scaleX,
      scaleY,
      translateX,
      translateY,
      transformOrigin,
    } = position;

    const springHorizontal =
      status === 'closed' ? springCloseHorizontal : springOpenHorizontal;
    const springVertical =
      status === 'closed' ? springCloseVertical : springOpenVertical;

    return (
      <Motion
        defaultStyle={{
          scaleX: 1,
          scaleY: 1,
        }}
        style={{
          scaleX: inTransit ? spring(scaleX, springHorizontal) : scaleX,
          scaleY: inTransit ? spring(scaleY, springVertical) : scaleY,
          translateX: inTransit
            ? spring(translateX, springHorizontal)
            : translateX,
          translateY: inTransit
            ? spring(translateY, springVertical)
            : translateY,
        }}
        onRest={this.finishPlaying}
      >
        {({ scaleX, scaleY, translateX, translateY }) => (
          <Wrapper
            innerRef={node => {
              this.childWrapperNode = node;
            }}
            style={{
              top,
              left,
              bottom,
              right,
              transform: `
                translate(${translateX}px, ${translateY}px)
                scale(${Math.max(scaleX, 0)}, ${Math.max(scaleY, 0)})
              `,
              transformOrigin,
            }}
          >
            {children}
          </Wrapper>
        )}
      </Motion>
    );
  }
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 10000;
`;

export default Transport;
