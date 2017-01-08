var React = require('react');
var ReactDom = require('react-dom');
var ModalTrash = require('./ModalTrash.js');
var ModalChange = require('./ModalChange');
var DetailsFormulaire = require('./DetailsFormulaire.js');

var Formulaire = React.createClass({
  getInitialState: function() {
    return {
      showDetails: false,
      showModalTrash: false,
      showModalChange: false
    };
  },
  openForm: function() {
    this.setState({ showDetails: true});
  },
  closeForm: function() {
    this.setState({ showDetails: false});
  },
  trash: function() {
    //TO DO when the button "yes delete it" is pressed
  },
  closeModalChange: function() {
    this.setState({ showModalChange: false, showDetails: false});
  },
  openModalChange: function() {
    this.setState({ showModalChange: true});
  },
  closeModalTrash: function() {
    this.setState({ showModal: false});
  },
  openModalTrash: function() {
    this.setState({ showModal: true});
  },
  save: function(){
    this.child.save();
  },
  render: function() {
    return (
      <li className="Formulaire">
        <ModalChange save={this.save} show={this.state.showModalChange} onHide={this.closeModalChange}/>
        <div className="infos">
          <img className="logo" src="./img/facebook500.png" />
          <h2>{this.props.formulaire.Name}</h2>
          <div className="Comments">{this.props.formulaire.Comments}</div>
        </div>
        { this.state.showDetails ?
          <div>
            <a onClick={this.openModalChange}><i className="ion-close-round"></i></a>
            <a onClick={this.openModalTrash}><i className="ion-trash-a"></i></a>
            <ModalTrash trash={this.trash} show={this.state.showModal} onHide={this.closeModalTrash}/>
            <DetailsFormulaire formulaire={this.props.formulaire} onRef={ref => (this.child = ref)} />
          </div>
           :
            <a href="#" onClick={this.openForm}><i className="ion-arrow-down-b"></i></a>
         }
        <div className="line"></div>
      </li>
    )
  }
});

export default Formulaire;
