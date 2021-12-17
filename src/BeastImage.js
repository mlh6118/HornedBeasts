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
    this.setState({
      likes: this.state.likes + 1,
    })
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