import React from 'react';
import Image from 'react-bootstrap/Image';

class Beast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    }
  }

  handleClick = () => {
    console.log("You are in BeastImage.js")
    this.setState({
      likes: this.state.likes + 1,
    })
    this.props.showModal(this.props.beast);
  }

  render () {
    // console.log(this.state);
    return(
      <div onClick={this.handleClick}>
        <Image src={this.props.src} alt={this.props.alt} rounded fluid />
        <h3>💜{this.state.likes}</h3>
      </div>
    );
  }
}

export default Beast;