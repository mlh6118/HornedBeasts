import React from 'react';
import Card from 'react-bootstrap/Card';
import './App.css';
import BeastImage from './BeastImage';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0
    }
  }

  // This function will add 1 to the existing counter of the beast selected as the favorite by the user.
  addFavorites = () => {
    this.setState({ favorites: this.state.favorites + 1});
  }

  render () {
    return(
      <Card style={{ width: "18rem" }}>
        <Card.Title>{this.props.beast.title}</Card.Title>
        <BeastImage 
          beast = {this.props.beast}
          showModal = {this.props.showModal}
          src={this.props.beast.image_url} 
          alt={this.props.beast.description} 
          onClick={this.addFavorites} 
        />
        <Card.Text>{this.props.beast.description}</Card.Text>
      </Card>
    );
  }
}

export default HornedBeast;