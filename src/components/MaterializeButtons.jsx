import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

function MaterializeButtons(){
  return (
    <div>
      <RaisedButton label="Default" style={style} />
      <RaisedButton label="Primary" primary={true} style={style} />
      <RaisedButton label="Secondary" secondary={true} style={style} />
      <RaisedButton label="Disabled" disabled={true} style={style} />
      <br />
      <br />
      <RaisedButton label="Full width" fullWidth={true} />
    </div>
  );
}

MaterializeButtons.propTypes = {
  /** Message to display */
  label: PropTypes.string
};

export default MaterializeButtons;