
import React from 'react';
import {render} from 'react-dom';
import { Nav, NavItem, Navbar, NavDropdown, Glyphicon } from 'react-bootstrap';

// this should be the navbar, still working on formatting this
export default class NavBar extends React.Component {
  render() {
    return (
      <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Shaun Appelbaum</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem href="https://github.com/ShaunApps">Github</NavItem>
          <NavItem href="https://linkedin.com/in/shaunappelbaum">LinkedIn</NavItem>
          <NavItem href="https://twitter.com/shaunappelbaum">Twitter</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
);
}
}
