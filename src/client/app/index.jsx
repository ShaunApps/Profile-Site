import React from 'react';
import {render} from 'react-dom';
import { Nav, NavItem, Navbar, Grid, Row, Col } from 'react-bootstrap';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import NavBar from './pages/navbar.jsx';
import Bio from './pages/bio/bio.jsx';
import SkillSetBox from './pages/skills.jsx';
import FooterR from './pages/footer.jsx';
import BitcoinInfo from './pages/bitcoin/bitcoininfo.jsx';



var TECH_USED = [
  { name: 'Javascript', exp: '70', image: 'http://www.w3devcampus.com/wp-content/uploads/logoAndOther/logo_JavaScript.png'},
  { name: 'Node.js', exp: '50', image: 'https://node-os.com/images/nodejs.png'},
  { name: 'React.js', exp: '35', image: 'https://facebook.github.io/react/img/logo_og.png'},
  { name: 'Ruby', exp: '65', image: 'http://budiirawan.com/wp-content/uploads/2015/04/ruby-logo.png'},
  { name: 'Rails', exp: '65', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Ruby_on_Rails.svg/791px-Ruby_on_Rails.svg.png'}
];


// main component
class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <Bio />
        <SkillSetBox skill={TECH_USED} />
        <BitcoinInfo />
        <FooterR />
      </div>
  );
 }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}></Route>
  </Router>
), document.getElementById('app'));
