import React from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import beastData from './data.json';
// import BeastImg from './BeastImage';
// import Beast from './BeastImage';

class Main extends React.Component {
  render () {
    console.log(this.props.image_url);
      return(
        <Container className="main">
          <Row sm={1} md={2} lg={3} xl={4}>
            {beastData.map((beastObj, idx) => (
              <HornedBeast beast={beastObj} key={idx} />
            ))}
                
          </Row>
        </Container>
      );
  }
}

export default Main;