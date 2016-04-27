import React from 'react';
import {render} from 'react-dom';
import { Nav, NavItem, Navbar, Grid, Row, Col } from 'react-bootstrap';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import NavBar from './pages/navbar.jsx';
import Bio from './pages/bio.jsx';
import SkillSetBox from './pages/skills.jsx';


// main component
class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <Bio />
        <SkillSetBox />
      </div>
  );
 }
}


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}></Route>
  </Router>
), document.getElementById('app'));
