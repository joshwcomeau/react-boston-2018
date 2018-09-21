// @flow

const getRectCenter = (rect: ClientRect) => ({
  x: rect.left + rect.width / 2,
  y: rect.top + rect.height / 2,
});

type GetTranslatePositionArgs = {
  quadrant: Quadrant,
  childRect: ClientRect,
  targetRect: ClientRect,
  alignedTo: 'corner' | 'center',
  windowWidth: number,
  windowHeight: number,
};
export const getTranslatePostion = ({
  quadrant,
  childRect,
  targetRect,
  alignedTo,
  windowWidth = window.innerWidth,
  windowHeight = window.innerHeight,
}: GetTranslatePositionArgs) => {
  const childCenter = getRectCenter(childRect);
  const targetCenter = getRectCenter(targetRect);

  console.log(quadrant);

  switch (quadrant) {
    case 1:
      // prettier-ignore
      return {
        translateX:
          alignedTo === 'corner'
            ? targetRect.right
            : targetCenter.x - childRect.width / 2,
        translateY:
          alignedTo === 'corner'
            ? targetRect.bottom
            : targetCenter.y - childRect.height / 2,
      };

    case 2:
      // prettier-ignore
      return {
        translateX:
          alignedTo === 'corner'
            ? targetRect.left - childRect.width
            : targetCenter.x,
        translateY:
          alignedTo === 'corner'
            ? targetRect.bottom
            : targetCenter.y - childRect.height / 2,
      };

    case 3:
      return {
        bottom:
          alignedTo === 'corner'
            ? augmentedTargetRect.fromBottomRight.top
            : augmentedTargetRect.fromBottomRight.centerY -
              augmentedChildRect.height / 2,
        translateX:
          alignedTo === 'corner'
            ? augmentedTargetRect.right
            : targetCenter.x - augmentedChildRect.width / 2,
      };

    case 4:
      return {
        bottom:
          alignedTo === 'corner'
            ? augmentedTargetRect.fromBottomRight.top
            : augmentedTargetRect.fromBottomRight.centerY -
              augmentedChildRect.height / 2,
        right:
          alignedTo === 'corner'
            ? augmentedTargetRect.fromBottomRight.left
            : augmentedTargetRect.fromBottomRight.centerX -
              augmentedChildRect.width / 2,
      };

    default:
      throw new Error(`Unrecognized quadrant: ${quadrant}`);
  }
};

export const createAugmentedClientRect = (
  rect: ClientRect,
  windowWidth: number,
  windowHeight: number
): AugmentedClientRect => {
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
