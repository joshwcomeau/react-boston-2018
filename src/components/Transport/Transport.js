// @flow
/**
 * This utility component can make its children appear from (or disappear to)
 * a given target HTMLElement.
 */
import React, { Component } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';

export type Status = 'closed' | 'opening' | 'open' | 'closing';

type Props = {
  children: React$Node,
  from: HTMLElement,
  to: HTMLElement,
  isOpen: boolean,
};

type State = {
  status: Status,
};

class Transport extends Component<Props, State> {
  state = {
    status: 'closed',
  };

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.isOpen && !nextProps.isOpen) {
      this.setState({ status: 'closing' });
    } else if (!this.props.isOpen && nextProps.isOpen) {
      this.setState({ status: 'opening' });
    }
  }

  getStyleForStatus = (status: Status) => {
    const { from, to } = this.props;

    switch (status) {
      case 'closed':
        return {
          // transform: `translate(${from.left}px, ${from.top}px) scale(0)`,
          left: from.right,
          top: from.bottom,
          width: 0,
          height: 0,
        };

      case 'opening': {
        return {
          // transform: `translate(${from.left}px, ${from.top}px) scale(1)`,
          left: from.right,
          top: from.bottom,
          width: 100,
          height: 200,
        };
      }

      case 'open': {
        return {
          transform: `translate(${from.left}px, ${from.top}px) scale(1)`,
        };
      }

      case 'closing': {
        return {
          transform: `translate(${to.left}px, ${to.top}px) scale(0)`,
        };
      }

      default: {
        return {};
      }
    }
  };

  handleComplete = () => {
    this.setState({
      status: this.state.status === 'opening' ? 'open' : 'closed',
    });
  };

  render() {
    const { children } = this.props;
    const { status } = this.state;

    console.log({ status });

    return (
      <Flipper flipKey={status}>
        <Flipped flipId="transport" onComplete={this.handleComplete}>
          <div style={this.getStyleForStatus(status)}>{children}</div>
        </Flipped>
      </Flipper>
    );
  }
}

export default Transport;
