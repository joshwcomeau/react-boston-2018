// @flow
import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import RcSlider, { createSliderWithTooltip } from 'rc-slider';

import { COLORS } from '../../constants';

type Props = {
  width: number,
  label: string,
  min?: number,
  max?: number,
  step?: number,
  value?: number,
  defaultValue?: number,
  onChange: (val: number) => void,
};

const RcSliderWithTooltip = createSliderWithTooltip(RcSlider);

class Slider extends Component<Props> {
  static defaultProps = {
    width: 100,
  };

  render() {
    const { width, label, ...delegatedProps } = this.props;

    return (
      <div style={{ width }}>
        {label && <Label>{label}</Label>}

        <RcSliderWithTooltip {...delegatedProps} />
      </div>
    );
  }
}

// HACK: RC Slider uses specific class names for styling, so we'll just use
// those.
const SLIDER_HEIGHT = 16;
const SLIDER_BAR_HEIGHT = 2;

injectGlobal`
  .rc-slider {
    position: relative;
    height: ${SLIDER_HEIGHT + 'px'};
    padding-top: ${SLIDER_HEIGHT / 2 + 'px'};
    margin-bottom: ${SLIDER_HEIGHT * 1.5 + 'px'};
  }

  .rc-slider .rc-slider-rail, .rc-slider .rc-slider-track {
    position: absolute;
    height: ${SLIDER_BAR_HEIGHT + 'px'};
  }

  .rc-slider .rc-slider-rail {
    width: 100%;
    background: rgba(0, 0, 0, 0.35);
  }

  .rc-slider .rc-slider-track {
    background: rgba(0, 0, 0, 0.9);
  }

  .rc-slider .rc-slider-handle {
    position: absolute;
    top: ${SLIDER_HEIGHT / 2 + SLIDER_BAR_HEIGHT / 2 + 'px'};
    background: ${COLORS.blue[500]};
    width: ${SLIDER_HEIGHT + 'px'};
    height: ${SLIDER_HEIGHT + 'px'};
    transform: translate(-50%, -50%);
    border-radius: 50%;
    cursor: grab;
    touch-action: pan-x;
  }

  .rc-slider .rc-slider-handle:active {
    cursor: grabbing;
  }

  .rc-slider-tooltip {
    display: none;
  }
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: ${SLIDER_HEIGHT * 0.75 + 'px'};
`;

export default Slider;
