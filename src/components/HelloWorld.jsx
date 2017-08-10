import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    border: 2px solid rgb(42, 125, 153);
    margin: 10px;
    padding: 0px 10px;
    background-color: rgb(236, 236, 236);
    display: inline-block;
`;
const Bold = styled.span`
    color: rgb(42, 125, 153);
    font-size: 1.5em;
`;


/** A super lame component that says Hello with a custom message. */
function HelloWorld({message}) {
  return (
  <Container>
    <Bold>Hello </Bold> {message}
  </Container>
  )
}

HelloWorld.propTypes = {
  /** Message to display */
  message: PropTypes.string
};

HelloWorld.defaultProps = {
  message: 'World'
};

export default HelloWorld;
