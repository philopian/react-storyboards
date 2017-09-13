import React from 'react';
import styled from 'styled-components';

import SimpleBanner from './SimpleBanner.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DialogExample from './DialogExample.jsx';

// import App from './components/App.jsx';


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
export default class ReactBanner extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
      <Container>
        <SimpleBanner></SimpleBanner>

        <MuiThemeProvider>
          <DialogExample />
        </MuiThemeProvider>
        <SimpleBanner></SimpleBanner>
        <SimpleBanner></SimpleBanner>



      </Container>);
  }
}

