import React from 'react';
import './App.css';

class HornedBeasts extends React.Component {
  render() {
    return (
      <>
        <h2>
          {this.props.Title}
        </h2>
        <img src={this.props.imageURL} className={this.props.className} alt={this.props.alt} />
        <p>
          {this.props.Description}
        </p>
      </>
    );
  }
}

export default HornedBeasts;
