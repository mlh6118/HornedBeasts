import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class BeastModal extends React.Component {
  render () {
    return(
      <div className="BeastModal">
        <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.beastData.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.beastObj.image_url}
            {this.props.beastObj.description}
          </Modal.Body>
          <Modal.Footer>
            <Button>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default BeastModal;
