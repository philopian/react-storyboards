import React from 'react';
import { storiesOf, configure, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';




/* 
import YOUR_COMPONENT from '../src/components/YOUR_COMPONENT.jsx';
storiesOf('HEADER_TITLE', module)
  .addDecorator(withKnobs)
  .add('SUB_TITLE',
    withInfo('')(() =>
      <WithNotes notes={'Write a little something about this component!'}>
        <YOUR_COMPONENT />
      </WithNotes>
    );
  );
*/




import SimpleBanner from '../src/components/SimpleBanner.jsx';
import ReactBanner from '../src/components/ReactBanner.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MaterializeButtons from '../src/components/MaterializeButtons.jsx';
import MaterializeButton from '../src/components/MaterializeButton.jsx';



storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add('SimpleBanner - default',
    withInfo('')(() =>
      <WithNotes notes={'This is a very simple react component with NO value passed into the prop.'}>
        <SimpleBanner  />
      </WithNotes>
    )
  )
  .addDecorator(withKnobs)
  .add('SimpleBanner - message',
    withInfo('')(() => {
      const name = text('Name', 'phil');
      return (
        <WithNotes notes={'This is a very simple react component with a value passed into the prop. You can edit the value in the "Knobs" section to see the live changes. '}>
        <SimpleBanner message={name} />
        </WithNotes>
      );
    })
  )
  .addDecorator(withKnobs)
  .add('ReactBanner',
    withInfo('')(() =>
      <WithNotes notes={'Here is a component with a button and a rotating image'}>
        <ReactBanner onClick={ action('button-click') }/>
      </WithNotes>
    )
  )
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
  )




;