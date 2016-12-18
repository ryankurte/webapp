'use strict';

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
//import RaisedButton from 'material-ui/RaisedButton';

class MyAwesomeReactComponent extends React.Component {
 
  constructor() {
    super();

    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    this.setState({open: false});
  }
 
  render() {
    // Set menu objects
    var menuItems = [
      { route: 'get-started', text: 'Get Started' },
      { route: 'customization', text: 'Customization' },
      { route: 'components', text: 'Components' },
    ];
 
    return (
      <header>
        <AppBar title='AppFace' onLeftIconButtonTouchTap={this.handleToggle}
          />
      </header>
      <div id="page_container">
        <Drawer open={this.state.open}
        docked={false} onEscKeyDown={this.handleClose}>
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
          <Divider />
          <MenuItem primaryText="Sign out" />
        </Drawer>
      </div>
    );
  }
}

export default MyAwesomeReactComponent;
