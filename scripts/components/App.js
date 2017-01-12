var React = require('react');
var ReactDOM = require('react-dom');

var Sidebar = require('./Sidebar.js');
var ListFormulaires = require('./ListFormulaires.js');

var App = React.createClass({
  render: function() {
    return(
      <div className="App">
        <div className="Sidebar">
            <Sidebar/>
        </div>
      </div>
    )
  }
});

export default App;
