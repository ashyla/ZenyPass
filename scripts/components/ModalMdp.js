var React = require('react');
var ReactDom = require('react-dom');
var Modal = require('react-overlays/lib/Modal');

var ModalMdp = React.createClass ({
  render: function (){
    return(
      <div>
        <Modal DialogClassName="ModalMdp" show={this.props.show} onHide={this.props.onHide}>
          <div className ="ModalMdp">
            <h4>Please enter your ZenyPass password</h4>
            <input className="InputModalMdp" placeholder="Mot de passe ZenyPass"></input>
            <a href="#" className="okMdp" onClick={this.props.okMdp}>OK</a>
          </div>
        </Modal>
      </div>
    )
  }
});

export default ModalMdp;
