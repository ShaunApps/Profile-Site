import React from 'react';
import {render} from 'react-dom';
import { Col, Grid, Panel, Row, Footer } from 'react-bootstrap';

var styleFooter = {
  marginTop: 100,
  marginBottom: 19
}

export default class FooterR extends React.Component {
  render() {
    return (
      <footer className="text-muted" style={styleFooter}>
        <div className="row">
          <div className="col-lg-12 text-center">
            All rights reserved. Shaun Appelbaum © 2016
          </div>
        </div>
      </footer>
    )
  }
}
