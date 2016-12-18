'use strict';

import React from 'react'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const LoginComponent = React.createClass({
  render() {
    return (
      <div>
        <TextField
        hintText="Username"
        floatingLabelText="Username"
        />
        <br />
        <TextField
        hintText="Password"
        floatingLabelText="Password"
        type="password"
        />
        <br />
        <RaisedButton label="Login" />
      </div>
    )
  }
})

export default LoginComponent;