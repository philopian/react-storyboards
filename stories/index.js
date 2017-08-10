import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';


import HelloWorld from '../src/components/HelloWorld.jsx';
storiesOf('HelloWorld', module)
  .add('Default', () => (
    <HelloWorld />
  ))
  .add('custom message', () => (
    <HelloWorld message='custom message' />
  ))