var React = require('react');
var ReactDOM = require('react-dom');

var SearchBar = React.createClass({

  render: function(){
    return(
      <div>
        <i className="ion-android-search"></i>
        <input className="Recherche" type="text" placeholder="Rechercher" />
      </div>
    )
  }

});

export default SearchBar;
