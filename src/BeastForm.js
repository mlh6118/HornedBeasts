import React from 'react';
import Form from 'react-bootstrap/Form';
import allBeastData from './data.json';

class BeastForm extends React.Component {

  // Put event handler here.
  handleChange = (event) => {
    // Do a check to make sure the code is getting the value expected.
    console.log(event.target.value);

    // Set up a variable to put the value obtained from the user selection.  Variable values are defined below in the if statements.
    const choice = event.target.value;
    // Set up an empty variable to be used for storing all the filtered beasts.  This variable will be lifted to App.js after the choice is made.
    let updatedChoice;

    if (choice === "1") {
      updatedChoice = allBeastData.filter(creature => creature.horns === 1);
    }
    else if (choice === "2") {
      updatedChoice = allBeastData.filter(creature => creature.horns === 2);
    }
    else if (choice === "3") {
      updatedChoice = allBeastData.filter(creature => creature.horns === 3);
    }
    else if (choice === "100") {
      updatedChoice = allBeastData.filter(creature => creature.horns === 100);
    }
    else if (choice === "0") {
      updatedChoice = allBeastData;
    }

    // This is the function call which is lifting state of updatedChoice back to App.js.  updateGalleryBeasts is the function defined in App.js.
    this.props.updateGalleryBeasts(updatedChoice); 
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