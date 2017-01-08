var React = require('react');
var ReactDom = require('react-dom');
var Modal = require('react-overlays/lib/Modal');

var ModalChange = React.createClass ({
  render: function (){
    return(
      <div>
        <Modal DialogClassName="ModalChange" show={this.props.show} onHide={this.props.onHide}>
          <div className ="ModalChange">
            <a href="#" className="noChange" onClick={this.props.onHide}><i className="ion-close-round"></i>Cancel changes and close</a>
            <a href="#" className="okChange" onClick={this.props.save}><i className="ion-android-upload"></i>Save changes and close</a>
          </div>
        </Modal>
      </div>
    )
  }
});

export default ModalChange;
