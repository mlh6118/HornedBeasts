import React from 'react';
import './App.css';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class SelectedBeast extends React.Component {
  render () {
    // Validate the data being passed in props is what is wanted.
    console.log(this.props);
    return(
      // Obtain all of the props for the Modal from showModal in App.js.
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ width: "18rem" }}>
            <Card.Img 
              src={this.props.selectedBeast.image_url} 
              alt={this.props.selectedBeast.description} />
            <Card.Text>{this.props.selectedBeast.description}</Card.Text>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
