import React from 'react';
import Form from 'react-bootstrap/Form';
import allBeastData from './data.json';

class BeastForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numHorns: allHorns, // What should this be to have all showing?
    }
  }

  // Put event handler here.
  handleChange = (event) => {
    console.log(event.target.value);
    const choice = event.target.value;
    let updatedChoice;

    if (choice === "1") {
      updatedChoice = allBeastData.filter(creature => creature.horns === "1");
    }
    // TODO: After all if-else checks, lift state by calling the function that is defined in App.js.
    // 1. Pass it the updatedChoice which is to be saved into state in the App.js.

  }


  // Add form here.
  render() {
    return (
      <div className="hornForm">
        <Form>
          <Form.Label>How many horns?</Form.Label>
          <br/>
          <Form.Select onChange={this.handleChange}>
            <option value="0">All numbers of horns</option>
            <option value="1">1 horn</option>
            <option value="2">2 horns</option>
            <option value="3">3 horns</option>
            <option value="100">100 horns</option>
          </Form.Select>
        </Form>
      </div>
    );
  }

}

export default BeastForm