import React from 'react';
import { storiesOf, configure, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';


import HelloWorld from '../src/components/HelloWorld.jsx';
storiesOf('HelloWorld', module)
  .addDecorator(withKnobs)
  .add('Default',
    withInfo('doc string about my component')(() =>
      <HelloWorld />
    )
  )
  .addDecorator(withKnobs)
  .add('Custom message',
    withInfo('doc string about my component')(() => {
      const name = text('Name', 'phil');
      return (<HelloWorld message={name} />)
    })
  );