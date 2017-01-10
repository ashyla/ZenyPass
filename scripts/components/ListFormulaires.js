var React = require('react');
var ReactDom = require('react-dom');
var ReactFireMixin = require('reactfire');
var Formulaire = require('./Formulaire.js');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var ListFormulaires = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      formulaires: []
    }
  },
  componentWillMount: function () {
    var data = firebase.database().ref('Formulaires');
    this.bindAsArray(data, "formulaires");
  },
  render: function() {
    return(
      <div className="listeForm">
        <ReactCSSTransitionGroup transitionName="fade">
        {
           this.state.formulaires.map((formulaire,i) => {
            return(
              <Formulaire formulaire={formulaire} key={formulaire['.key']}/>
            )
          })
         }
         </ReactCSSTransitionGroup>
      </div>
    )
  }
});

export default ListFormulaires;
