import React from 'react';
import {render} from 'react-dom';
import { Nav, NavItem, Navbar, Grid, Row, Col } from 'react-bootstrap';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import NavBar from './pages/navbar.jsx';
import Bio from './pages/bio/bio.jsx';
import SkillSetBox from './pages/skills.jsx';



var TECH_USED = [
  { name: 'Javascript', image: 'http://www.w3devcampus.com/wp-content/uploads/logoAndOther/logo_JavaScript.png'},
  { name: 'Node.js', image: 'https://node-os.com/images/nodejs.png'},
  { name: 'React.js', image: 'https://facebook.github.io/react/img/logo_og.png'},
  { name: 'Ruby', image: 'http://budiirawan.com/wp-content/uploads/2015/04/ruby-logo.png'},
  { name: 'Rails', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Ruby_on_Rails.svg/791px-Ruby_on_Rails.svg.png'}
];


// main component
class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <Bio />
        <SkillSetBox skill={TECH_USED} />
      </div>
  );
 }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}></Route>
  </Router>
), document.getElementById('app'));
