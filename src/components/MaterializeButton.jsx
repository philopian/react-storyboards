import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

function MaterializeButton({label, primaryVal}){
  return (
      <RaisedButton label={label} primary={primaryVal} style={style} />
  );
}

MaterializeButton.propTypes = {
  label: PropTypes.string,
  primaryVal: PropTypes.bool,
};
MaterializeButton.defaultProps = {
  label: 'Button',
  primaryVal: false,
};

export default MaterializeButton;