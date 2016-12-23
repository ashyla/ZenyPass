var React = require('react');
var ReactDom = require('react-dom');
var ReactFireMixin = require('reactfire');
var Formulaire = require('./Formulaire.js');

var ListFormulaires = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      formulaires: []
    }
  },
  componentDidMount: function () {
    var data = firebase.database().ref('zenyway-4aec8/Formulaires');
    this.bindAsArray(data, "formulaires");
  },
  render: function() {
    return(
      <div className="listeForm">
        {this.state.formulaires.map(function(formulaire,i){
          return(
            <Formulaire formulaire={formulaire} key={formulaire['.key']}/>
          )
        })}
      </div>
    )
  }
});

export default ListFormulaires;
