var React = require('react');
var ReactDom = require('react-dom');
var DetailsFormulaire = require('./DetailsFormulaire.js');

var Formulaire = React.createClass({
  getInitialState: function() {
    return {showDetails: false};
  },
  openForm: function() {
    this.setState({ showDetails: true});
  },
  trash: function() {
    //Delete this Form
  },
  closeForm: function() {
    this.setState({ showDetails: false});
  },
  render: function() {
    return (
      <li className="Formulaire">
        <div className="infos">
          <h2>{this.props.formulaire.Name}</h2>
          <span>{this.props.formulaire.Comments}</span>
        </div>
        { this.state.showDetails ?
          <div>
            <a href="#" onClick={this.closeForm}><i className="ion-close-round"></i></a>
            <a href="#" onClick={this.closeForm}><i className="ion-trash-a"></i></a>
            <DetailsFormulaire />
          </div>
           :
            <a href="#" onClick={this.openForm}><i className="ion-arrow-down-b"></i></a> }
        <div className="line"></div>
      </li>
    )
  }
});

export default Formulaire;
