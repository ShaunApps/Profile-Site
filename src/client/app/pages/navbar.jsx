
import React from 'react';
import {render} from 'react-dom';
import { Nav, NavItem, Navbar, NavDropdown, Glyphicon } from 'react-bootstrap';

// this should be the navbar, still working on formatting this
export default class NavBar extends React.Component {
  render() {
    return (
      <Navbar fixedTop inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Shaun Appelbaum</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem href="https://github.com/ShaunApps"><i className="fa fa-2x fa-github"></i></NavItem>
          <NavItem href="https://linkedin.com/in/shaunappelbaum"><i className="fa fa-2x fa-linkedin"></i></NavItem>
          <NavItem href="https://twitter.com/shaunappelbaum"><i className="fa fa-2x fa-twitter"></i></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
);
}
}
