import React from 'react';
import {render} from 'react-dom';
import { Nav, NavItem, Navbar, Grid, Row, Col, Link, Image } from 'react-bootstrap';


// this Component renders my bio
export default class Bio extends React.Component {
  render () {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xsHidden md={2}></Col>
          <Col xs={6} md={4}>
            <Image src="/Users/ShaunApppelbaum-MTA/Desktop/ReactJs/react-profile/assets/Shaun_profile pic.jpg" width="275" height="250" rounded />
          </Col>
          <Col xs={6} md={4}>
            <h3>Shaun Appelbaum</h3>
            <p>I like to write code and lift weights.</p>
            <p>Passionate about Bitcoin. Markets are efficient.</p>
          </Col>
          <Col xsHidden md={2}></Col>
        </Row>
        <Row className="show-grid">
          <Col xs={1} md={2}></Col>
          <Col xs={5} md={4}></Col>
          <Col xs={5} md={4}>

          </Col>
          <Col xsHidden md={4}></Col>
        </Row>
      </Grid>

  );
 }
}
