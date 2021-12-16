import React from 'react';
import './App.css';

class HornedBeast extends React.Component {
  render () {
    return(
      <>
        <h2>
          {this.props.title}
        </h2>
        <img src={this.props.image_url} className={this.props.className} alt={this.props.alt} />
        <p>
          {this.props.description}
        </p>
      </>
    );
  }
}

export default HornedBeast;