import React, { PureComponent } from 'react';

import { random } from '../../utils';

const getTransformString = ({ x, y, rotation }) =>
  `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

class Drift extends PureComponent {
  state = {
    x: this.props.initialX,
    y: this.props.initialY,
    rotation: this.props.initialRotation,
  };

  driftX = random(-10, 10);
  driftY = random(-10, 10);
  rotate = random(-2, 2);

  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameId);
  }

  tick = () => {
    // Allow "freezing" through props, to lock an instance in place.
    if (this.props.isFrozen) {
      return;
    }

    this.animationFrameId = window.requestAnimationFrame(() => {
      this.setState(
        state => ({
          x: state.x + this.driftX / 100,
          y: state.y + this.driftY / 100,
          rotation: state.rotation + this.rotate / 10,
        }),
        this.tick
      );
    });
  };

  render() {
    const { x, y, rotation } = this.state;
    const { children } = this.props;

    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          transform: getTransformString({ x, y, rotation }),
        }}
      >
        {children}
      </div>
    );
  }
}

export default Drift;
