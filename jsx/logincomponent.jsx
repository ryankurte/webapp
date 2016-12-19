'use strict';

import React from 'react'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'

const LoginComponent = React.createClass({
  render() {
    return (
        <Grid>
            <Row>
                <Col xsOffset={1} xs={10} smOffset={3} sm={6} mdOffset={4} md={4}>
                    <form>
                        <TextField
                        hintText="Username"
                        floatingLabelText="Username"
                        fullWidth={true}
                        />
                        <br />
                        <TextField
                        hintText="Password"
                        floatingLabelText="Password"
                        type="password"
                        fullWidth={true}
                        />
                        <br />
                        <RaisedButton label="Login" />
                    </form>
                </Col>
            </Row>
      </Grid>
    )
  }
})

export default LoginComponent;