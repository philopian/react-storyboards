import React from 'react';
import { storiesOf, configure, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';




/* 
import YOUR_COMPONENT from '../src/components/YOUR_COMPONENT.jsx';
storiesOf('HEADER_TITLE', module)
  .addDecorator(withKnobs)
  .add('SUB_TITLE',
    withInfo('')(() =>
      <YOUR_COMPONENT />
    )
  );
*/




import HelloWorld from '../src/components/HelloWorld.jsx';
storiesOf('Hello World', module)
  .addDecorator(withKnobs)
  .add('Default',
    withInfo('')(() =>
      <HelloWorld />
    )
  )
  .addDecorator(withKnobs)
  .add('Custom message',
    withInfo('')(() => {
      const name = text('Name', 'phil');
      return (<HelloWorld message={name} />)
    })
  );











import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MaterializeButtons from '../src/components/MaterializeButtons.jsx';
import MaterializeButton from '../src/components/MaterializeButton.jsx';
storiesOf('Materialize-UI', module)
  .addDecorator(withKnobs)
  .add('Buttons',
    withInfo('')(() => {

      const style = {
        margin: 12,
      };

      return (
        <MuiThemeProvider>
        <MaterializeButtons  />
      </MuiThemeProvider>
      );
    })
  )
  .addDecorator(withKnobs)
  .add('Button',
    withInfo('')(() => {

      const style = {
        margin: 12,
      };

      return (
        <div>
          <MuiThemeProvider>
            <MaterializeButton  />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <MaterializeButton primaryVal={true} label='Primary' onTouchTap={ action('button-click') }/>
          </MuiThemeProvider>
        </div>
      );
    })
  );






import RotateIcon from '../src/components/RotateIcon.jsx';
storiesOf('Simple Stateless', module)
  .addDecorator(withKnobs)
  .add('Animated Icon',
    withInfo('')(() =>
      <RotateIcon />
    )
  );