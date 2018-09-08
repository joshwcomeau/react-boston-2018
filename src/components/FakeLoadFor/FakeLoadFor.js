import React, { Component } from 'react';
import { PulseLoader as Spinner } from 'halogenium';

type Props = {
  duration: number,
};

type State = {
  loaded: boolean,
};

class FakeLoadFor extends Component<Props, State> {
  state = {
    loaded: false,
  };

  componentDidMount() {
    window.setTimeout(
      () => this.setState({ loaded: true }),
      this.props.duration
    );
  }

  render() {
    const { children } = this.props;
    const { loaded } = this.state;

    return loaded ? children : <Spinner />;
  }
}

export default FakeLoadFor;
