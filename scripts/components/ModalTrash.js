var React = require('react');
var ReactDom = require('react-dom');
var Modal = require('react-overlays/lib/Modal');

var ModalTrash = React.createClass({
  render: function() {
    return (
      <div>
        <Modal DialogClassName="ModalTrash" show={this.props.show} onHide={this.props.onHide}>
          <div className ="ModalTrash">
            <h4>Do you really want to delete this record ?</h4>
            <a href="#" className="aTrash" onClick={this.props.trash}><i className="ion-trash-a"></i>Yes, delete it</a>
            <a href="#" className="aCloseRound" onClick={this.props.onHide}><i className="ion-close-round"></i>No</a>
          </div>
        </Modal>
      </div>
    )
  }
});

export default ModalTrash;
