import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class BeastModal extends React.Component {
  render () {
    return(
      <div className="BeastModal">
        <modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.beast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.beast.image_url}
            {this.props.beast.description}
          </Modal.Body>
          <Modal.Footer>
            <Button>Close</Button>
          </Modal.Footer>
        </modal>
      </div>
    );
  }
}

export default BeastModal;
