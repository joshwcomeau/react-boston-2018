// @flow
import React, { PureComponent } from 'react';

type Props = {
  x: number,
  y: number,
  children: (rotation: number) => any,
};

class RotateAfterMouse extends PureComponent<Props> {
  lastCoordinates: Array<{ x: number, y: number }> = [];

  componentDidUpdate(prevProps: Props) {
    this.lastCoordinates.push({ x: prevProps.x, y: prevProps.y });

    if (this.lastCoordinates.length > 8) {
      this.lastCoordinates.shift();
    }
  }

  getFileRotation = () => {
    // Get the orientation for the file.
    // This is done by comparing the current coordinates to the previous ones.
    if (this.lastCoordinates.length === 0) {
      return 0;
    }

    const { x, y } = this.props;

    const previousCoordinate = this.lastCoordinates[0];

    const deltaX = x - previousCoordinate.x;
    const deltaY = y - previousCoordinate.y;

    // angle in degrees
    const angleInRads = Math.atan2(deltaY, deltaX);
    const angleInDegrees = (angleInRads * 180) / Math.PI;

    // We want our file to be sticking up, not sideways, so we add 90 degrees.
    return angleInDegrees + 90;
  };

  render() {
    const { children } = this.props;

    const rotation = this.getFileRotation();

    return children(rotation);
  }
}

export default RotateAfterMouse;
