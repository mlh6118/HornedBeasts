import React from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BeastForm from './BeastForm.js';

class Main extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      // Set the initial value of show for the showModal to false because we don't want anything to appear on initial page load.
      show: false
    }
  }

  render () {
    // console.log(this.props.image_url);
      return(
        <Container className="main">
          {/* Render the BeastForm info with the value updateGalleryBeasts which is passed down from App.js. */}
          <BeastForm updateGalleryBeasts={this.props.updateGalleryBeasts} />
          <Row sm={1} md={2} lg={3} xl={4}>
            {/* this.props.beastData is coming from App.js. */}
            {this.props.galleryBeasts.map((beastObj, idx) => (
              // variable={actual object passed} and variable is the name to be used in this.props.variable for child.
              <HornedBeast beast={beastObj} key={idx} showModal={this.props.showModal} />
            ))}
                
          </Row>
        </Container>
      );
  }
}

export default Main;
