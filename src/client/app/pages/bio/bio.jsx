import React from 'react';
import {render} from 'react-dom';
import { Nav, NavItem, Navbar, Grid, Row, Jumbotron, Col, Link, Image } from 'react-bootstrap';
import styles from "./style.jsx";


var jumboStyle = {
    backgroundColor: 'white',
    borderRadius: 12,
    color: 'black',
    marginBottom: 0,
    padding: 30,
    opacity: 0.95,
    right: 20
};

var imageUrl = '/Users/ShaunApppelbaum-MTA/Desktop/ReactJs/react-profile/assets/dzcode.png';

var headerStyle = {
  height: 350,
  backgroundImage: 'url(' + imageUrl + ')' 
};


// this Component renders my bio
export default class Bio extends React.Component {
  render () {
    return (
        <header style={headerStyle}>
          <Grid>
            <Row className="show-grid">
              <Col md={4}>
                <Image src="/Users/ShaunApppelbaum-MTA/Desktop/ReactJs/react-profile/assets/Shaun_profile pic.jpg" width="285" height="250" rounded />
              </Col>
              <Col  md={8}>
                <Jumbotron style={jumboStyle}>
                  <p>I like to write code and lift weights.
                  Passionate about Bitcoin. Markets are efficient.</p>
                </Jumbotron>
              </Col>
            </Row>
          </Grid>
        </header>

  );
 }
}
