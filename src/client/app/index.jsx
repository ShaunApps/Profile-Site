import React from 'react';
import {render} from 'react-dom';
import { Tabs, Tab, Nav, NavItem, Navbar } from 'react-bootstrap'
import { Router, Route, Link } from 'react-router'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>This should be /</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
  )
 }
}

class About extends React.Component {
  render () {
    return (
      <h1>About</h1>
    )
  }
}


render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} ></Route>
    </Route>
  </Router>
), document.getElementById('app'));
