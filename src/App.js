import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import beast from './data.json';
import beastData from './data.json';
// import BeastModal from './BeastModal.js';

import SelectedBeast from './SelectedBeast.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      // SelectedBeast needs to know which beast to choose.
      selectedBeast: {}
    }
  }

  // app.js --> main.js --> hornedbeast.js (renders all beasts)
  // function (passed to main) --> call it in hornedbeast via props
  // function is going to update SelectedBeast.
  // function will need which beast was selected.
  updateSelectedBeast = (clickedBeast) => {
    this.setState({show: true});
  }  

  onHide = () => {
    this.setState({show: false});
  }

  render() {
    return (
      <Container className="App">
        <Header title='The Horned Beast Encyclopedia'/>
        <Main beastData={beastData} imageURLs={beast}/>
        <SelectedBeast />
        <Footer text='&copy; 2021 Marni Hager'/>
        {/* <BeastModal selectedBeast={this.state.selectedBeast} show={this.state.show} onHide={this.onHide} /> */}
        <SelectedBeast selectedBeast={this.state.selectedBeast} show={this.state.show} onHide={this.onHide} />
      </Container>
    );
  }
}

export default App;
