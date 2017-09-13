import React from 'react';
import styled from 'styled-components';

import SimpleBanner from './SimpleBanner.jsx';
import ReactBanner from './ReactBanner.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MaterializeButton from './MaterializeButton.jsx';
import DialogExample from './DialogExample.jsx';


// Styles
const Container = styled.div`
  border: 2px solid rgb(42, 125, 153);
  width:100%;
  padding: 0px 10px;
  background-color: rgb(236, 236, 236);
  display: inline-block;
  font-family: "helvetica",  "san-serif";
`;

// React Component
export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
      <Container>
        <SimpleBanner></SimpleBanner>
        <ReactBanner></ReactBanner>
      </Container>);
  }
}




/*
<MuiThemeProvider>
  <DialogExample />
</MuiThemeProvider>     

*/
