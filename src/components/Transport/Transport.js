// @flow
/**
 * This utility component can make its children appear from (or disappear to)
 * a given target HTMLElement.
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring';

import { getTranslatePostion } from './Transport.helpers';

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
  state = {
    reset: false,
  };

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

  getChildPosition = () => {
    const { isOpen, from, to } = this.props;

    if (!this.childWrapperNode) {
      return {
        fromPosition: { translateX: 0, translateY: 0, scale: 0 },
        toPosition: { translateX: 0, translateY: 0, scale: 0 },
      };
    }

    const quadrant = this.getQuadrant(from);
    const childRect = this.childWrapperNode.getBoundingClientRect();
    childRect.width = 250;
    childRect.height = 450;

    // TODO: Can probably figure out `retracting` by just changing `alignedTo`
    // when `from` === `to`
    const { translateX: fromX, translateY: fromY } = getTranslatePostion({
      quadrant,
      childRect,
      targetRect: from,
      alignedTo: 'corner',
    });

    const { translateX: toX, translateY: toY } = getTranslatePostion({
      quadrant,
      childRect,
      targetRect: isOpen ? from : to,
      alignedTo: isOpen ? 'corner' : 'center',
    });

    const fromPosition = {
      translateX: fromX,
      translateY: fromY,
      scale: isOpen ? 0 : 1,
    };

    const toPosition = {
      translateX: toX,
      translateY: toY,
      scale: isOpen ? 1 : 0,
    };

    console.log(fromPosition, toPosition);

    return { fromPosition, toPosition };
  };

  render() {
    const { children, isOpen } = this.props;

    const { fromPosition, toPosition } = this.getChildPosition();

    return (
      <Spring
        from={fromPosition}
        to={toPosition}
        reset={isOpen}
        onRest={this.handleFinish}
      >
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
