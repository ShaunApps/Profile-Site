import React from 'react';
import {render} from 'react-dom';
import { Row, Grid, Col, colSpan, Link } from 'react-bootstrap';

export default class Contactme extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={1} md={3}></Col>
          <Col xs={2} md={2}>
            <a href="https://github.com/ShaunApps">
              <img src="https://assets-cdn.github.com/images/modules/open_graph/github-mark.png" width="140" height="80\" />
            </a>
          </Col>
          <Col xs={2} md={2}>
            <a href="https://twitter.com/shaunappelbaum">
              <img src="https://pbs.twimg.com/profile_images/666407537084796928/YBGgi9BO.png" width="125" height="100" />
            </a>
          </Col>
          <Col xs={2} md={2}>
            <a href="https://linkedin.com/in/shaunappelbaum">
              <img src="https://lh3.googleusercontent.com/00APBMVQh3yraN704gKCeM63KzeQ-zHUi5wK6E9TjRQ26McyqYBt-zy__4i8GXDAfeys=w300" width="100" height="75" />
            </a>
          </Col>
        </Row>
      </Grid>
    );
  }
}
