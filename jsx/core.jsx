import React from 'react'
import { render } from 'react-dom'

import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import { BrowserHistory } from 'react-history'

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MenuComponent from './menucomponent';
import LoginComponent from './logincomponent';

// Inject TapEvent for mobile (this will not be required in future versions of react)
injectTapEventPlugin();

// Top level app, injects material ui theme
const App = React.createClass({
  render() {
    return (
      <div>
        <MenuComponent />
        {this.props.children}
      </div>
    )
  }
})

const About = React.createClass({
  render() {
    return (
      <p>Test About Page</p>
    )
  }
})

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
  <MuiThemeProvider>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
    </Route>
    <Route path="/login" component={LoginComponent} />
  </Router>
  </MuiThemeProvider>
), document.getElementById('react-root'))

