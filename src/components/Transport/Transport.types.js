// @flow

// `ClientRect`, the type returned by `getBoundingClientRect`, is helpful, but
// it doesn't tell us everything we need. It's missing:
// - The X/Y coordinates for the center of the node
// - The distance from the right and bottom edges of the viewport.
export type AugmentedClientRect = {
  // Standard ClientRect width/height in pixels
  width: number,
  height: number,

  top: number,
  left: number,
  right: number,
  bottom: number,

  // Distance to the center of the node in pixels from the top/left
  centerX: number,
  centerY: number,

  // This augmented property gives us information about the opposite viewport
  // corner.
  fromBottomRight: {
    top: number,
    left: number,
    right: number,
    bottom: number,
    centerX: number,
    centerY: number,
  },
};

export type MinimumFixedPosition = {
  top?: number,
  left?: number,
  right?: number,
  bottom?: number,
};
