import React from 'react';
import {render} from 'react-dom';
import { Nav, NavItem, Navbar, Grid, Row, Jumbotron, Col, Link, Image } from 'react-bootstrap';


export default class StorySection extends React.Component {
  render() {
    return (
      <div className="col-md-12">
        <p>My language of choice is Javascript. I am currently learning React + Redux.</p>
      </div>
    )
  }
}
