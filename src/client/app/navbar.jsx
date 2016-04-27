
import React from 'react';
import {render} from 'react-dom';
import { Nav, NavItem, Navbar, NavDropdown } from 'react-bootstrap';
import { Router, Route, Link } from 'react-router';


export default class navBar extends React.Component {
  render() {
    return (

      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
);
}
}
