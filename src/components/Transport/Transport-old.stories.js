// @flow
import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Transport from './Transport';
import WindowDimensions from '../WindowDimensions';

import type { Status } from './Transport';

type Quadrant = 1 | 2 | 3 | 4;

const QUADRANTS: Array<Quadrant> = [1, 2, 3, 4];

type Props = {};

type State = {
  from: ?HTMLElement,
  to: ?HTMLElement,
  status: Status,
};

class Wrapper extends Component<Props, State> {
  state = {
    from: null,
    to: null,
    status: 'closed',
  };

  nodes: {
    [Quadrant]: HTMLElement,
  } = {};

  componentDidMount() {
    const from = this.nodes[1];
    const to = this.nodes[2];

    this.setState({
      from,
      to,
    });
  }

  handleClick = node => {
    if (this.state.status === 'open') {
      this.setState({
        to: node,
        status: node === this.state.from ? 'retracted' : 'closed',
      });
      return;
    }

    this.setState({
      from: node,
      status: 'open',
    });
  };

  getPositionForQuadrant = quadrant => {
    switch (quadrant) {
      case 1:
        return { top: 30, left: 40 };
      case 2:
        return { top: 30, right: 40 };
      case 3:
        return { bottom: 30, left: 40 };
      case 4:
        return { bottom: 30, right: 40 };
      default:
        throw new Error('Unrecognized quadrant');
    }
  };

  render() {
    return (
      <WindowDimensions>
        {({ windowWidth, windowHeight }) => (
          <Fragment>
            {QUADRANTS.map(quadrant => (
              <Button
                key={quadrant}
                id={`button-${quadrant}`}
                innerRef={node => (this.nodes[quadrant] = node)}
                style={{
                  position: 'fixed',
                  width: 100,
                  height: 100,
                  ...this.getPositionForQuadrant(quadrant),
                }}
                onClick={() => this.handleClick(this.nodes[quadrant])}
              >
                Button
              </Button>
            ))}

            {this.state.from &&
              this.state.to && (
                <Transport
                  isOpen={this.state.status === 'open'}
                  from={this.state.from.getBoundingClientRect()}
                  to={this.state.to.getBoundingClientRect()}
                  windowWidth={windowWidth}
                  windowHeight={windowHeight}
                >
                  <div
                    style={{
                      width: 250,
                      height: 450,
                      background: 'red',
                    }}
                  />
                </Transport>
              )}
          </Fragment>
        )}
      </WindowDimensions>
    );
  }
}

const Button = styled.button`
  position: fixed;
  padding: 20px;
`;

storiesOf('Transport (old)', module)
  .add('default (top to bottom)', () => (
    <Wrapper fromQuadrants={[1, 2]} toQuadrants={[3, 4]} />
  ))
  .add('corners', () => (
    <Wrapper fromQuadrants={[1, 4]} toQuadrants={[2, 3]} />
  ));
