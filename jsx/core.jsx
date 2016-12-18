import React from 'react'
import { render } from 'react-dom'

import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import { BrowserHistory } from 'react-history'

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuComponent from './component';

// Inject TapEvent for mobile (this will not be required in future versions of react)
injectTapEventPlugin();

// Then we delete a bunch of code from App and
// add some <Link> elements...
const App = React.createClass({
  render() {
    return (
      <MuiThemeProvider>
        <MenuComponent />
      </MuiThemeProvider>
    )
  }
})

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.getElementById('react-root'))