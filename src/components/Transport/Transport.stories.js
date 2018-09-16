// @flow
import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Transport from './Transport';
import WindowDimensions from '../WindowDimensions';

class Wrapper extends Component {
  state = {
    status: 'closed',
  };

  toggle = () => {
    this.setState({
      status: this.state.status === 'open' ? 'closed' : 'open',
    });
  };

  render() {
    return (
      <Fragment>
        <Transport
          from={{
            top: 10,
            left: 10,
            width: 20,
            height: 20,
          }}
          to={{
            top: 500,
            left: 250,
            width: 20,
            height: 20,
          }}
          isOpen={this.state.status === 'open'}
        >
          <div
            style={{
              background: 'red',
              width: 100,
              height: 300,
            }}
          />
        </Transport>
        <button onClick={this.toggle}>Toggle</button>
      </Fragment>
    );
  }
}

storiesOf('Transport', module).add('default', () => <Wrapper />);
