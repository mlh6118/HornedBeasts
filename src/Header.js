import React from 'react';
import './App.css';

class Header extends React.Component {
  render () {
    return(
      <>
        <h2>
          {this.props.title}
        </h2>
      </>
    );
  }
}

export default Header;
