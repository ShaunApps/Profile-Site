import React from 'react';
import {render} from 'react-dom';
import { Nav, NavItem, Navbar, Grid, Row, Jumbotron, Col, Link, Image } from 'react-bootstrap';


  var jumboStyle = {
      backgroundColor: 'white',
      border: 'solid',
      borderColor: 'black',
      borderRadius: 12,
      marginBottom: 0,
      padding: 30,
      opacity: 0.95,
      right: 20
  };

  var imageUrl = '/Users/ShaunApppelbaum-MTA/Desktop/ReactJs/react-profile/assets/dzcode2.png';

  var headerStyle = {
    height: 400,
    backgroundImage: 'url(' + imageUrl + ')'
  };

  var bioRowStyle = {
    paddingTop: 100
  };

  var bioPicStyle = {
    border: 'solid',
    borderColor: 'black'
  };
