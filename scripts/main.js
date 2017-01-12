var React = require('react');
var ReactDOM = require('react-dom');
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Redirect = ReactRouter.Redirect
var Link = ReactRouter.Link
var Navigation = ReactRouter.Navigation;
var history = require('history/lib/createBrowserHistory');

var App = require('./components/App.js');


injectTapEventPlugin();

ReactDOM.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
      <App/>
  </MuiThemeProvider>
), document.getElementById('app'));
