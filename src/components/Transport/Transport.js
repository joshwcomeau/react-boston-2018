// @flow
/**
 * This utility component can make its children appear from (or disappear to)
 * a given target HTMLElement.
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring';

type Position = {
  translateX: number,
  translateY: number,
  scale: number,
};

type Props = {
  children: React$Node,
  from: ClientRect,
  to: ClientRect,
  isOpen: boolean,
};

class Transport extends Component<Props, State> {
  childWrapperNode: HTMLElement;

  // static getDerivedStateFromProps(props: Props) {

  // }

  componentDidMount() {
    this.childRect = this.childWrapperNode.getBoundingClientRect();
  }

  getQuadrant(rect): Quadrant {
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

    if (!rect) {
      throw new Error('Could not calculate quadrant, no rect given');
    }

    const windowCenter = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const rectCenter = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };

    if (rectCenter.y < windowCenter.y) {
      // top half, left or right
      return rectCenter.x < windowCenter.x ? 1 : 2;
    } else {
      // bottom half, left or right
      return rectCenter.x < windowCenter.x ? 3 : 4;
    }
  }

  getCornerPositionForQuadrant = (quadrant: Quadrant) => {
    switch (quadrant) {
      case 1:
        return ['right', 'bottom'];
      case 2:
        return ['left', 'bottom'];
      case 3:
        return ['right', 'top'];
      case 4:
        return ['left', 'top'];
      default:
        throw new Error('Unrecognized quadrant');
    }
  };

  getChildPosition = () => {
    const { isOpen, from, to } = this.props;

    if (!this.childRect) {
      return {
        fromPosition: { translateX: 0, translateY: 0, scale: 0 },
        toPosition: { translateX: 0, translateY: 0, scale: 0 },
      };
    }

    const quadrant = this.getQuadrant(this.childRect);

    if (isOpen) {
      const fromPosition = {
        translateX: from.right,
        translateY: from.bottom,
        scale: 0,
      };

      const toPosition = {
        translateX: from.right,
        translateY: from.bottom,
        scale: 1,
      };

      return { fromPosition, toPosition };
    } else {
      // If this is our initial state, closed, without a 'from', then we can
      // simply set the `from`
      const fromPosition = {
        translateX: from.right,
        translateY: from.bottom,
        scale: 1,
      };

      const toPosition = {
        translateX: to.left + to.width / 2,
        translateY: to.top + to.height / 2,
        scale: 0,
      };

      return { fromPosition, toPosition };
    }
  };

  render() {
    const { children } = this.props;

    const { fromPosition, toPosition } = this.getChildPosition();

    console.log({ fromPosition, toPosition });

    return (
      <Spring from={fromPosition} to={toPosition} reset>
        {({ translateX, translateY, scale }) => (
          <Wrapper
            innerRef={node => {
              this.childWrapperNode = node;
            }}
            style={{
              transform: `
                translate(${translateX}px, ${translateY}px)
                scale(${scale}, ${scale})
              `,
            }}
          >
            {children}
          </Wrapper>
        )}
      </Spring>
    );
  }
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
`;

export default Transport;
