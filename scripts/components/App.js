var React = require('react');
var ReactDOM = require('react-dom');

var Sidebar = require('./Sidebar.js');
var ListFormulaires = require('./ListFormulaires.js');

var App = React.createClass({
  render: function() {
    return(
      <div className="App">
        <div className="Sidebar">
          <aside>
            <Sidebar history={this.props.history}/>
          </aside>
        </div>
        <div className="ListeFormulaires">
          <ListFormulaires />
        </div>
      </div>
    )
  }
});

export default App;
