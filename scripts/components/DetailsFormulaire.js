var React = require('react');
var ReactDom = require('react-dom');

var DetailsFormulaire = React.createClass({
  render: function(){
    return(
      <div className="DetailsForm">
        <i className="ion-android-bookmark"></i><input className="NomSite" required type="text" id="Name" placeholder="Nom du Site" />
        <input className="URL" required type="text" id="URL" placeholder="URL" />
        <img src="./img/icon_zenypass_fill21A0B7.svg"/><input className="Login" required type="text" id="Login" placeholder="Nom utilisateur" />
        <input className="Password" required type="text" id="password" placeholder="Mot de passe" /><i className="ion-eye"></i>
        <textarea className="Comments" rows="3" cols="80" required type="text" id="Comments" placeholder="Commentaires" /><i className="ion-edit"></i>
        <div className="Checking-div">
          <span className="automatic-login">Automatic login: </span>
          <input className="box-automatic-oui" required type="checkbox" name="choix1" value="none" />Oui
          <input className="box-automatic-non" required type="checkbox" name="choix2" value="none" />Non
          <span className="require-password">Requires ZenyPass password: </span>
          <input className="box-password-oui" required type="checkbox" name="choix3" value="none" />Oui
          <input className="box-password-non" required type="checkbox" name="choix4" value="none" />Non

        </div>
        <a href="#" className="saveChanges" onClick={this.save} ><i className="ion-android-upload"></i>Save Changes</a>
      </div>
    )
  }
});

export default DetailsFormulaire;
