import React from 'react';
import './App.css';
import HornedBeasts from './HornedBeasts'
import imageTriceratops from './imgs/triceratops.png'
import imageRhino from './imgs/rhino.png'
import imageNarwhal from './imgs/narwhal.jpg'

class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeasts Title={"Triceratops"} Description={"A dinosaur with three horns on its head."} imageURL={imageTriceratops} className="dinosaur" />
        <HornedBeasts Title={"Rhinoceros"} Description={"A mammal on land from Africa with one horn centered on its nose."} imageURL={imageRhino} className={"mammal"} />
        <HornedBeasts Title={"Narwhal"} Description={"A mammal in the water with a single horn on its head."} imageURL={imageNarwhal} className={"mammal"} />
      </>
    );
  }
}

export default Main;
