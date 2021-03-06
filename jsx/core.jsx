import React from 'react'
import { render } from 'react-dom'

import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import { BrowserHistory } from 'react-history'

import window from 'global/window';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Runtime from 'offline-plugin/runtime';

import MenuComponent from './menucomponent';
import LoginComponent from './logincomponent';
import MapComponent from './components/map';

import Manifest from '../manifest.json';

// Inject TapEvent for mobile (this will not be required in future versions of react)
injectTapEventPlugin();

// Install offline app handler
Runtime.install({
  onUpdating: () => {
    console.log('SW Event:', 'onUpdating');
  },
  onUpdateReady: () => {
    console.log('SW Event:', 'onUpdateReady');
    // Tells to new SW to take control immediately
    runtime.applyUpdate();
  },
  onUpdated: () => {
    console.log('SW Event:', 'onUpdated');
    // Reload the webpage to load into the new version
    window.location.reload();
  },

  onUpdateFailed: () => {
    console.log('SW Event:', 'onUpdateFailed');
  }
});

// Top level app
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
      <Route path="/map" component={MapComponent} width={100} height={100}/>
      <Route path="/about" component={About} />
    </Route>
    <Route path="/login" component={LoginComponent} />
  </Router>
  </MuiThemeProvider>
), document.getElementById('react-root'))

