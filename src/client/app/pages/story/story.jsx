import React from 'react';
import {render} from 'react-dom';
import { Nav, NavItem, Navbar, Grid, Row, Jumbotron, Col, Link, Image } from 'react-bootstrap';
import styles from './style.css';


export default class StorySection extends React.Component {
  render() {
    return (
      <Row className="col-md-12" bsStyle="description">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <p>My language of choice is Javascript. I am currently learning React + Redux.</p>
        </div>
        <div className="col-md-3"></div>
      </Row>
    )
  }
}
