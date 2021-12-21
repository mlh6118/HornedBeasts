import React from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import beastData from './data.json';
import SelectedBeast from './Footer';

class Main extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      show: false
    }
  }

  

  render () {
    console.log(this.props.image_url);
      return(
        <Container className="main">
          <Row sm={1} md={2} lg={3} xl={4}>
            {/* this.props.beastData is coming from app.js. */}
            {this.props.beastData.map((beastObj, idx) => (
              // variable={actual object passed} and variable is the name to be used in this.props.variable for child.
              <HornedBeast beast={beastObj} key={idx} />
            ))}
                
          </Row>
        </Container>
      );
  }
}

export default Main;
