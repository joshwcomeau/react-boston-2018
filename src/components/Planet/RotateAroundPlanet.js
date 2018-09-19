// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

type Props = {
  planetSize: number,
  duration: number,
  delay: number,
  children: React$Node,
};

class RotateAroundPlanet extends Component<Props> {
  static defaultProps = {
    color: '#FFF',
    duration: 50000,
    delay: 0,
  };

  node: ?HTMLElement;

  componentDidMount() {
    const { planetSize, duration, delay } = this.props;
    const { node } = this;

    if (!node) {
      return;
    }

    const orbitAnimationFrames = [
      { transform: `translateX(-100%)` },
      { transform: `translateX(${planetSize}px)` },
    ];

    const orbitAnimationTiming = {
      duration,
      delay,
      iterations: Infinity,
    };

    // $FlowFixMe
    node.animate(orbitAnimationFrames, orbitAnimationTiming);
  }

  render() {
    const { duration, delay, planetSize, children, ...delegated } = this.props;

    return (
      <Wrapper innerRef={node => (this.node = node)} {...delegated}>
        {children}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: inline-block;
`;

export default RotateAroundPlanet;
