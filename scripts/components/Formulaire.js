var React = require('react');
var ReactDom = require('react-dom');

var Formulaire = React.createClass({
  render: function() {
    return (
      <div className="Formulaire">
        <div className="infos">
          <h2>{this.props.formulaire.Name}</h2>
        <span>{this.props.formulaire.Comments}</span>
        </div>
      </div>
    )
  }
});

export default Formulaire;
