import React from 'react';
import { storiesOf, configure, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';


import HelloWorld from '../src/components/HelloWorld.jsx';
storiesOf('HelloWorld', module)
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



// import RaisedButton from 'material-ui/RaisedButton';
// storiesOf('Materialize-UI', module)
//   .addDecorator(withKnobs)
//   .add('Button',
//     withInfo('')(() => {

//       const style = {
//         margin: 12,
//       };



//       return (
//         <div>
//           <RaisedButton label="Default" style={style} />
//           <RaisedButton label="Primary" primary={true} style={style} />
//           <RaisedButton label="Secondary" secondary={true} style={style} />
//           <RaisedButton label="Disabled" disabled={true} style={style} />
//           <br />
//           <br />
//           <RaisedButton label="Full width" fullWidth={true} />
//         </div>
//       );

//     }));


import MaterializeButtons from '../src/components/MaterializeButtons.jsx';
import MaterializeButton from '../src/components/MaterializeButton.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
            <MaterializeButton primaryVal='true' label='Primary' />
          </MuiThemeProvider>
        </div>
      );
    })
  );