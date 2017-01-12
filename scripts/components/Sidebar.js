var React = require('react');
var ReactDom = require('react-dom');
var SearchBar = require('./SearchBar.js');
var Formulaire = require('./Formulaire');
var ReactFireMixin = require('reactfire');
var MediaQuery = require('react-responsive');
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var Sidebar = React.createClass({
  mixins: [ReactFireMixin],
  createCard: function() {
    var Ref = firebase.database().ref('Formulaires');
    Ref.push({
      Name: "New Card",
      Comments: "Nouvelle Card",
      Login:"",
      URL:"",
      password:"",
      Tag:""
    });
  },
  header: function() {
    return(
      <div>
        <a href='#' onClick={this.createCard} className="newCard"><i className="ion-plus-round"></i>Create new Card</a>
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
