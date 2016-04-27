import React from 'react';
import {render} from 'react-dom';
import { Nav, NavItem, Navbar, Grid, Row, Col } from 'react-bootstrap';
import { Router, Route, Link } from 'react-router';
import navBar from './navbar.jsx';
import Bio from './bio.jsx';




class App extends React.Component {
  render () {
    return (
        <Bio />
  );
 }
}



render((
  <Router component={navBar}>
    <Route path="/" component={App}></Route>
  </Router>
), document.getElementById('app'));
