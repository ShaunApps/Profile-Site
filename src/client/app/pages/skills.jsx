import React from 'react';
import {render} from 'react-dom';
import { Row, Col, colSpan, Grid, Label } from 'react-bootstrap';

const TECH_USED = [
  { name: 'Javascript', image: ''},
  { name: 'Node.js', image: ''},
  { name: 'React.js', image: ''},
  { name: 'Ruby', image: ''},
  { name: 'Rails', image: ''},
  { name: 'HTML', image: ''},
  { name: 'CSS', image: ''}
];

// turns the prop into table elements with name and image
class SkillSetRow extends React.Component {
  render() {
    return (
      <tr>
        <td colSpan="4">{this.props.skill.name}</td>
        <td colSpan="4">{this.props.skill.image}</td>
      </tr>
    );
  }
}
// calls SkillSet Row on each element in data passed down and formats it
export default class SkillSetBox extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={4}></Col>
          <Col xs={6} md={4}>
            <h2>Skills</h2>
          </Col>
          <Col xsHidden md={4}></Col>
        </Row>
        <Row className="show-grid">
          <Col xs={2} md={2}></Col>
          <Col xs={6} md={3}>Javascript</Col>
          <Col xsHidden md={2}></Col>
          <Col xs={6} md={3}>
            <img src='http://www.w3devcampus.com/wp-content/uploads/logoAndOther/logo_JavaScript.png' height='100' width='100' />
          </Col>
          <Col xsHidden md={2}></Col>
        </Row>
        <Row className="show-grid">
          <Col xs={2} md={2}></Col>
          <Col xs={6} md={3}>Node.js</Col>
          <Col xsHidden md={2}></Col>
          <Col xs={6} md={3}>
            <img src='https://node-os.com/images/nodejs.png' height='100' width='100' />
          </Col>
          <Col xsHidden md={2}></Col>
        </Row>
        <Row className="show-grid">
          <Col xs={2} md={2}></Col>
          <Col xs={6} md={3}>React.js</Col>
          <Col xsHidden md={2}></Col>
          <Col xs={6} md={3}>
            <img src='https://facebook.github.io/react/img/logo_og.png' height='100' width='100' />
          </Col>
          <Col xsHidden md={2}></Col>
        </Row>
        <Row className="show-grid">
          <Col xs={2} md={2}></Col>
          <Col xs={6} md={3}>Ruby</Col>
          <Col xsHidden md={2}></Col>
          <Col xs={6} md={3}>
            <img src='http://budiirawan.com/wp-content/uploads/2015/04/ruby-logo.png' height='100' width='100' />
          </Col>
          <Col xsHidden md={2}></Col>
        </Row>
        <Row className="show-grid">
          <Col xs={2} md={2}></Col>
          <Col xs={6} md={3}>HTML & CSS</Col>
          <Col xsHidden md={2}></Col>
          <Col xs={6} md={3}>
            <img src='http://www.itbaloch.com/wp-content/uploads/2015/06/html-css.jpg' height='75' width='100' />
          </Col>
          <Col xsHidden md={2}></Col>
        </Row>
      </Grid>

    );
  }
}
