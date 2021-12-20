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
  render() {
    return (
      <Container className="App">
        <Header title='The Horned Beast Encyclopedia'/>
        <Main imageURLs={beast}/>
        <SelectedBeast />
        <Footer text='&copy; 2021 Marni Hager'/>
      </Container>
    );
  }
}

export default App;
