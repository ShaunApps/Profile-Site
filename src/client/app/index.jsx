import React from 'react';
import {render} from 'react-dom';
import { Nav, NavItem, Navbar, Grid, Row, Col } from 'react-bootstrap';
import { Router, Route, Link } from 'react-router';
import navBar from './navbar.jsx';


class App extends React.Component {
  render () {
    return (

        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}></Col>
            <Col xs={6} md={4}>
              <h1>Shaun Appelbaum</h1>
            </Col>
            <Col xsHidden md={4}></Col>
          </Row>
          <Row className="show-grid">
            <Col xs={6} md={4}></Col>
            <Col xs={6} md={4}>
              <p>I like to write code and lift weights.</p>
              <p>Passionate about Bitcoin. Markets are efficient.</p>
            </Col>
            <Col xsHidden md={4}></Col>
          </Row>
        </Grid>
  )
 }
}




render((
  <Router component={navBar}>
    <Route path="/" component={App}></Route>
  </Router>
), document.getElementById('app'));
