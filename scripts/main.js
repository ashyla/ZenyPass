var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Redirect = ReactRouter.Redirect
var Link = ReactRouter.Link
var Navigation = ReactRouter.Navigation;
var history = require('history/lib/createBrowserHistory')();

var App = require('./components/App.js');

var Main = React.createClass({

  render: function() {
      return (
        <div className="Main">
          <App/>
        </div>
      )
    }
  });

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={Main}>
      <Route path="app" component={App} />
    </Route>
  </Router>
), document.querySelector('#main'));
