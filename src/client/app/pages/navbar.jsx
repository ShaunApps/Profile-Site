
import React from 'react';
import {render} from 'react-dom';
import { Nav, NavItem, Navbar, NavDropdown } from 'react-bootstrap';

// this should be the navbar, still working on formatting this
export default class NavBar extends React.Component {
  render() {
    return (
      <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Shaun Appelbaum</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">About</NavItem>
          <NavItem eventKey={2} href="#">Blog</NavItem>
          <NavItem eventKey={3} href="#">Contact</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
);
}
}
