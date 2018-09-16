// @flow
import type {
  AugmentedClientRect,
  MinimumFixedPosition,
} from './Transport.types';

// Calculate the distance in pixels between two ClientRects
// prettier-ignore
export const getPositionDelta = (
  oldRect: AugmentedClientRect,
  newRect: AugmentedClientRect
) => [
  oldRect.left - newRect.left,
  oldRect.top - newRect.top
];

export const createAugmentedClientRect = (
  input: HTMLElement | ClientRect,
  windowWidth: number,
  windowHeight: number
): AugmentedClientRect => {
  // prettier-ignore
  // We support either an HTMLElement or a ClientRect as input.
  // This is easy since a ClientRect can easily be derived from an HTML
  // element:
  const rect = input instanceof HTMLElement
    ? input.getBoundingClientRect()
    : input;

  return {
    width: rect.width,
    height: rect.height,

    top: rect.top,
    left: rect.left,
    right: rect.right,
    bottom: rect.bottom,
    centerX: rect.left + rect.width / 2,
    centerY: rect.top + rect.height / 2,

    fromBottomRight: {
      top: windowHeight - rect.top,
      left: windowWidth - rect.left,
      right: windowWidth - rect.right,
      bottom: windowHeight - rect.bottom,
      centerX: windowWidth - rect.right + rect.width / 2,
      centerY: windowHeight - rect.bottom + rect.height / 2,
    },
  };
};

export const createAugmentedClientRectFromMinimumData = (
  data: MinimumFixedPosition,
  childWidth: number,
  childHeight: number,
  windowWidth: number,
  windowHeight: number
) => {
  /**
   * During the initial position calculation, we figure out where our
   * child needs to move to, but for brevity, we only get the minimum
   * position necessary (either `top`/`bottom`, either `left`/`right`).
   * Later, when trying to apply the inverse translation in the FLIP step,
   * we'll need a proper AugmentedClientRect to do the translation calcs.
   * This method bridges that gap and derives the needed position data.
   */

  if (typeof data.top !== 'number' && typeof data.bottom !== 'number') {
    throw new Error(
      'Cannot calculate AugmentedClientRect without either top or bottom'
    );
  }
  if (typeof data.left !== 'number' && typeof data.right !== 'number') {
    throw new Error(
      'Cannot calculate AugmentedClientRect without either top or bottom'
    );
  }

  // TODO: Flow doesn't like that I have these one-of-two-required args for
  // top/bottom and left/right. There are some possible solutions:
  //  - http://tiny.cc/xuwvry
  //  - http://tiny.cc/7uwvry
  //
  // For now, I'm just gonna FlowFixMe. But I should come back to this and
  // fix it properly.

  const top =
    typeof data.top === 'number'
      ? data.top
      : // $FlowFixMe
        windowHeight - data.bottom - childHeight;
  const left =
    typeof data.left === 'number'
      ? data.left
      : // $FlowFixMe
        windowWidth - data.right - childWidth;

  // The data values are in fixed positioning terms;
  // this means that `right` and `bottom` are the distance from that side of
  // the viewport.
  // We're creating an AugmentedClientRect, which looks at the distance from
  // the top/left of the viewport to the bottom/right edge of the element.
  const right =
    typeof data.right === 'number'
      ? windowWidth - data.right
      : // $FlowFixMe
        windowWidth - data.left - childWidth;
  const bottom =
    typeof data.bottom === 'number'
      ? windowHeight - data.bottom
      : // $FlowFixMe
        windowHeight - data.top - childHeight;

  const pseudoClientRect = {
    top,
    left,
    right,
    bottom,
    width: childWidth,
    height: childHeight,
  };

  return createAugmentedClientRect(
    // Argh, so our method should take a ClientRect, but we can't create one.
    // This is a bug in Flow; it _should_ take a DOMRect, and so we could then
    // build one.
    //
    // As it stands, this is duck-typed as a ClientRect, regardless of what
    // Flow thinks!
    //
    // See: https://github.com/facebook/flow/issues/5475
    // $FlowFixMe
    pseudoClientRect,
    windowWidth,
    windowHeight
  );
};
