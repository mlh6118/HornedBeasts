import React from 'react';
import Card from 'react-bootstrap/Card';
import './App.css';
import BeastImage from './BeastImage';

class HornedBeast extends React.Component {
  render () {
    return(
      <Card style={{ width: "18rem" }}>
        <Card.Title>{this.props.beast.title}</Card.Title>
        {/* <Card.Img src={this.props.beast.image_url} className={this.props.beast.className} alt={this.props.beast.description} /> */}
        <BeastImage src={this.props.beast.image_url} alt={this.props.beast.description} />
        <Card.Text>{this.props.beast.description}</Card.Text>
      </Card>
    );
  }
}

export default HornedBeast;