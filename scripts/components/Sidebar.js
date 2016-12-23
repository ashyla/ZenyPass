var React = require('react');
var ReactDom = require('react-dom');

var SearchBar = require('./SearchBar.js')

var Sidebar = React.createClass({
  getInitialState: function() {
    return{
      currentPage: ""
    }
  },
  header: function() {
    return(
      <div>
        <a href='#' className="newCard"><i className="ion-plus-round"></i>Create new Card</a>
        <a href='#' className="Morepswd"><i className="ion-ios-cart"></i>Buy more passwords</a>
        <div className="SearchBar2">
          <SearchBar />
        </div>
      </div>
    )
  },
  Home: function() {
    return(
      <div className="Home">
        <img src="./img/logo_zenypass_fill_21A0B7_512x256.png"/>
        <h1>Hello ZenyPass</h1>
      </div>
    )
  },
  render: function() {
    return(
      <div className="Sidebars">
        {this.Home()}
        <div className="sidebar1">
          <div className="SearchBar1">
            <SearchBar />
          </div>
        </div>
        <div className="header">
          {this.header()}
        </div>
      </div>
    )
  }
});

export default Sidebar;
