import React from 'react';
import {render} from 'react-dom';
import { Nav, NavItem, Navbar, Grid, Row, Col } from 'react-bootstrap';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import NavBar from './pages/navbar.jsx';
import Bio from './pages/bio/bio.jsx';
import SkillSetBox from './pages/skills.jsx';
import Contactme from './pages/contactme.jsx';


// main component
class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <Bio />
        <SkillSetBox />
        <Contactme />
      </div>
  );
 }
}


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}></Route>
  </Router>
), document.getElementById('app'));
