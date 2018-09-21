// @flow
import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Transport from './TransportCodeSandbox';

storiesOf('Transport (Alex on Codesandbox)', module).add('default', () => (
  <Transport />
));
