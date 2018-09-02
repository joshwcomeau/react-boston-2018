import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Text, Heading } from 'spectacle';

import TitleParticles from '../../components/TitleParticles';
import FallFromAbove from '../../components/FallFromAbove';

class Title extends Component {
  state = {
    dropTheBeat: false,
  };

  componentDidMount() {
    window.addEventListener('keypress', this.handleKeypress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeypress);
  }

  handleKeypress = ev => {
    if (ev.key === 'd') {
      this.setState({ dropTheBeat: true });
    }
  };

  render() {
    const { dropTheBeat } = this.state;

    return (
      <Fragment>
        <Wrapper>
          <Subtitle>The Case For</Subtitle>
          <Heading
            textColor="primary"
            textFont="secondary"
            style={{ fontSize: '9.25rem' }}
          >
            Whimsy
          </Heading>
          <Heading
            textColor="primary"
            style={{
              marginTop: '6rem',
              fontSize: '3rem',
              fontWeight: '300',
            }}
          >
            by <strong>Josh Comeau</strong>
          </Heading>

          {dropTheBeat && (
            <ExtendedWrapper>
              <FallFromAbove>
                <Extended>Extended Mix</Extended>
              </FallFromAbove>
            </ExtendedWrapper>
          )}
        </Wrapper>
        <TitleParticles />
      </Fragment>
    );
  }
}

const Wrapper = styled.div`
  position: relative;
  text-shadow: 3px 3px 3px rgba(80, 13, 142, 0.25);
`;

const ExtendedWrapper = styled.div`
  position: absolute;
  bottom: 95px;
  right: 135px;
  transform: rotate(-5deg);
`;

const Extended = styled.div`
  display: inline-block;
  background: #222;
  color: #fff;
  padding: 1rem 3rem;
  font-size: 48px;
`;

const Subtitle = styled.div`
  font-size: 3.5rem;
  font-weight: 300;
  color: white;
`;

export default Title;
