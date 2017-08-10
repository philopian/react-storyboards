import React from 'react';
import { storiesOf, configure, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';


import HelloWorld from '../src/components/HelloWorld.jsx';
storiesOf('HelloWorld', module)
  .add('Default',
    withInfo('doc string about my component')(() =>
      <HelloWorld />
    )
  )
  .add('Custom message',
    withInfo('doc string about my component')(() =>
      <HelloWorld message='custom message' />
    )
  );