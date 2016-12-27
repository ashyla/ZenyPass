var React = require('react');
var ReactDom = require('react-dom');

var Formulaire = React.createClass({
  render: function() {
    return (
      <li className="Formulaire">
        <div className="infos">
          <h2>{this.props.formulaire.Name}</h2>
          <span>{this.props.formulaire.Comments}</span>
        </div>
        <i className="ion-arrow-down-b"></i>
        <div className="line"></div>
      </li>
    )
  }
});

export default Formulaire;
