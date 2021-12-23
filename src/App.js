import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import beast from './data.json';
import beastData from './data.json';
import SelectedBeast from './SelectedBeast.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      // SelectedBeast needs to know which beast to choose.
      selectedBeast: {},  // This is an empty object because it will be updated down in setState.
      galleryBeasts: beastData  // This sets the galleryBeasts variable to all beastData for initial page load.
    }
  }

  // Done: Define a function that will update the galleryBeasts state based on the user's choice.
  // 1. Accept new filtered beast array and set it in state.
  // 2. Pass into Main.
  // 3. Main will map and render this, which it already does. Just need to change variable name. (Done)

  // Get the value of updatedChoice from BeastForm.js and set the state of galleryBeasts with it.  Then assign it to the variable of updateGalleryBeasts.
  updateGalleryBeasts = (updatedChoice) => {
    this.setState({galleryBeasts: updatedChoice})    
  }

  // This function will pass in an argument called clickedBeast to be set for rendering in the modal called showModal.
  showModal = (clickedBeast) => {
    console.log(clickedBeast);
    this.setState({
      show: true,
      selectedBeast: clickedBeast  // property name: value
    });
  };  

  // If the close button or X is clicked, change the value of show via setState to be false in the function named onHide.
  onHide = () => {
    this.setState({show: false});
  };

  render() {
    return (
      <Container className="App">
        <Header title='The Horned Beast Encyclopedia'/>
        {/* Render the main page by passing it the gallery beasts set in state and the updateGalleryBeasts set in it's own function above. */}
        <Main galleryBeasts={this.state.galleryBeasts} updateGalleryBeasts={this.updateGalleryBeasts} imageURLs={beast} showModal={this.showModal} />
        <Footer text='&copy; 2021 Marni Hager'/>
        <SelectedBeast 
          // attribute=value (coming from state)
          selectedBeast={this.state.selectedBeast} 
          show={this.state.show} 
          onHide={this.onHide} 
        />
      </Container>
    );
  }
}

export default App;
