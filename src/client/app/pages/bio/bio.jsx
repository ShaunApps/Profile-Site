import React from 'react';
import {render} from 'react-dom';
import { Nav, NavItem, Navbar, Grid, Row, Jumbotron, Col, Link, Image } from 'react-bootstrap';
import styles from "./style.jsx";


// this Component renders my bio
export default class Bio extends React.Component {
  render () {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={4}>
            <Image src="/Users/ShaunApppelbaum-MTA/Desktop/ReactJs/react-profile/assets/Shaun_profile pic.jpg" width="285" height="250" rounded />
          </Col>
          <Col style={styles.jumboStyle} md={8}>
            <Jumbotron>
              <p>I like to write code and lift weights.
              Passionate about Bitcoin. Markets are efficient.</p>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>

  );
 }
}
