import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const falling = keyframes`
  from {
    opacity: 0;
    transform: scale(2) translateY(-100px) rotate(-10deg);
  }

  to {
    opacity: 1;
    transform: scale(1) translateY(0px) rotate(0deg);
  }
`;

const dustCloud = keyframes`
  from {
    opacity: 1;
    transform: scale(0.1);
  }

  to {
    opacity: 0;
    transform: scale(10);
  }
`;

export default ({ children }) => (
  <Wrapper>
    <Children>{children}</Children>
    <DustCloud />
  </Wrapper>
);

const Wrapper = styled.div`
  animation: ${falling} cubic-bezier(0.84, 0, 1, 1) 500ms both;
`;

const Children = styled.div`
  position: relative;
  z-index: 2;
`;

const DustCloud = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  filter: blur(10px);
  animation: ${dustCloud} 1000ms 500ms ease-out both;
`;
