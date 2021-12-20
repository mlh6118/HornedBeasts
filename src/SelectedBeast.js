import React from 'react';
import './App.css';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

class SelectedBeast extends React.Component {
  render () {
    return(
      <Modal show={true}>
        <Modal.Header>title</Modal.Header>
        <Modal.Body>asdfasdf</Modal.Body>
        <Modal.Footer>This is the footer</Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
