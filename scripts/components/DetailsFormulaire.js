var React = require('react');
var ReactDom = require('react-dom');
var ModalMdp = require('./ModalMdp');
var MediaQuery = require('react-responsive');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
//var Suggestions = require('./Suggestions')
var ReactTags = require('react-tag-autocomplete');

var DetailsFormulaire = React.createClass({
  getInitialState: function(){
    return{
      showModalMdp: false,
      showModalMdp: false,
      Suggestions: ['Réseaux sociaux','Shopping', 'Personnel', 'Jeux', 'Finance', 'Famille'],
      tags: this.props.formulaire.Tag['.key']
    }
  },
  componentWillMount: function() {
    // Where you need to put data from each props of "formulaire"
  },
  componentDidMount: function() {
    this.props.onRef(this);
  },
  componentWillUnmount: function() {
    this.props.onRef(undefined);
  },
  save: function() {
    console.log("save marche correctement")
    //TO DO when button "save changes" is pressed
  },
  openModalMdp: function() {
    this.setState({ showModalMdp: true});
  },
  closeModalMdp: function() {
    this.setState({ showModalMdp: false});
  },
  confirmationMdp: function() {
    this.setState({ showModalMdp: false, isPassed: true});
    return(
      <i className="ion-eye-disabled"></i>
    )
    // TO DO  when button "OK" is pressed
  },
  copy: function (){
    // TO DO when copy button is pressed
  },
  handleDelete: function(i) {
    var tags = this.state.tags
    tags.splice(i,1)
    this.setState({ tags })
  },
  handleAddition: function(tag) {
    var tags = this.state.tags
    tags.push(tag)
    this.setState({ tags })
  },
  render: function() {
    return(
      <div className="DetailsForm">
        <ReactCSSTransitionGroup transitionName="fade-Details" transitionAppear={true}>
        <MediaQuery maxWidth={1700}>
          {(matches) => {
            if(matches) {
              return(
                <div className="DetailsUp-1700">
                <li><i className="ion-android-bookmark"></i><input className="NomSite-1700" required type="text" id="Name" placeholder="Nom du Site" /></li>
                <li><input className="URL-1700" required type="text" id="URL" placeholder="URL" /></li>
                <li><img className="img-1700" src="./img/icon_zenypass_fill21A0B7.svg"/><input className="Login-1700" required type="text" id="Login" placeholder="Nom utilisateur" /></li>
                <li><input className="Password-1700" required type="text" id="password" placeholder="Mot de passe" /><a href="#" onClick={this.openModalMdp}><i className="ion-eye"></i></a><a href="#" onClick={this.copy}><i className="ion-ios-copy-outline"></i></a></li>
                {/* { this.state.isPassed ?
                  this.confirmationMdp()
                  :
                  <i className="ion-eye"></i>
                }</a> */}

                <ModalMdp okMdp={this.confirmationMdp} show={this.state.showModalMdp} onHide={this.closeModalMdp} />
                <li><textarea className="Comments-1700" rows="3" cols="80" required type="text" id="Comments" placeholder="Commentaires" /><i className="ion-edit"></i></li>
                <li className="react-tag-1700"><div className="space-pricetags-1700"><i className="ion-pricetags"></i></div>
                <ReactTags id="tag" className="ReactTags-1700" tags={this.state.tags} suggestions={this.state.Suggestions} handleDelete={this.handleDelete} handleAddition={this.handleAddition}/></li>
                <pre><code>{JSON.stringify(this.state.tags, null, 2)}</code></pre>
                <i className="ion-gear-b"></i>
              </div>
              )
            }else{
              return(
                <div className="DetailsUp">
                <i className="ion-android-bookmark"></i><input className="NomSite" required type="text" id="Name" placeholder="Nom du Site" />
                <input className="URL" required type="text" id="URL" placeholder="URL" />
                <img src="./img/icon_zenypass_fill21A0B7.svg"/><input className="Login" required type="text" id="Login" placeholder="Nom utilisateur" />
                <input className="Password" required type="text" id="password" placeholder="Mot de passe" /><a href="#" onClick={this.openModalMdp}><i className="ion-eye"></i></a><a href="#" onClick={this.copy}><i className="ion-ios-copy-outline"></i></a>
                {/* { this.state.isPassed ?
                  this.confirmationMdp()
                  :
                  <i className="ion-eye"></i>
                }</a> */}

                <ModalMdp okMdp={this.confirmationMdp} show={this.state.showModalMdp} onHide={this.closeModalMdp} />
                <textarea className="Comments" rows="3" cols="80" required type="text" id="Comments" placeholder="Commentaires" /><i className="ion-edit"></i>
                <i className="ion-pricetags"></i>
                <ReactTags id="tag" className="ReactTags" tags={this.state.tags} suggestions={this.state.Suggestions} handleDelete={this.handleDelete} handleAddition={this.handleAddition}/>
                <pre><code>{JSON.stringify(this.state.tags, null, 2)}</code></pre>
                <i className="ion-gear-b"></i>
              </div>
              )
            }
          }}
        </MediaQuery>
        <MediaQuery maxWidth={1700}>
          {(matches) => {
            if(matches) {
              return(
                <div className="Checking-div-1700">
                  <li className="automatic-login">Automatic login:
                    <input className="box-automatic-oui" type="radio" name="radio-group" /><label for="box-automatic-oui" class="radio-custom-label">Oui</label>
                    <input className="box-automatic-non" type="radio" name="radio-group" /><label for="box-automatic-non" class="radio-label">Non</label>
                  </li>
                  <li className="require-password-1700">Requires ZenyPass password:
                    <input className="box-password-oui" type="radio" name="radio-group2" /><label for="box-password-oui" class="radio-custom-label">Oui</label>
                    <input className="box-password-non" type="radio" name="radio-group2" /><label for="box-password-non" class="radio-custom-label">Non</label>
                  </li>
                </div>
              )
            }else{
              return(
                <div className="Checking-div">
                  <span className="automatic-login">Automatic login: </span>
                  <input className="box-automatic-oui" type="radio" name="radio-group" /><label for="box-automatic-oui" class="radio-custom-label">Oui</label>
                  <input className="box-automatic-non" type="radio" name="radio-group" /><label for="box-automatic-non" class="radio-label">Non</label>
                  <span className="require-password">Requires ZenyPass password: </span>
                  <input className="box-password-oui" type="radio" name="radio-group2" /><label for="box-password-oui" class="radio-custom-label">Oui</label>
                  <input className="box-password-non" type="radio" name="radio-group2" /><label for="box-password-non" class="radio-custom-label">Non</label>
                </div>
              )
            }
          }}
        </MediaQuery>
          <MediaQuery maxWidth={1700}>
            {(matches) => {
              if (matches) {
                return <a href="#" className="saveChanges-1700" onClick={this.save} ><i className="ion-android-upload"></i>Save Changes</a>;
              } else {
                return <a href="#" className="saveChanges" onClick={this.save} ><i className="ion-android-upload"></i>Save Changes</a>;
              }
            }}
          </MediaQuery>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
});

export default DetailsFormulaire;
