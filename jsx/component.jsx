
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import LeftNav from 'material-ui/LeftNav';
import MenuItem from 'material-ui/MenuItem';

class MyAwesomeReactComponent extends React.Component {
 
  constructor() {
    super();
 
    this._handleClick = this._handleClick.bind(this);
  }
 
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }
 
  _handleClick(e) {
    e.preventDefault();
 
    // Show/Hide the LeftMenu
    this.refs.leftNav.toggle();
  }
 
  render() {
    var menuItems = [
      { route: 'get-started', text: 'Get Started' },
      { route: 'customization', text: 'Customization' },
      { route: 'components', text: 'Components' },
      { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://github.com/callemall/material-ui',
         text: 'GitHub'
      },
      {
         text: 'Disabled',
         disabled: true
      },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://www.google.com',
         text: 'Disabled Link',
         disabled: true
      },
    ];
 
    return (
      <div id="page_container">
 
        <LeftNav
          ref="leftNav"
          docked={false}
          menuItems={menuItems} />
 
        <header>
          <AppBar title='ZoomFleet' onLeftIconButtonTouchTap={this._handleClick}
            isInitiallyOpen={true}
            />
        </header>
         
      </div>
    );
  }
}

export default MyAwesomeReactComponent;
