import React from 'react';
import {render} from 'react-dom';
import { Row, Col, colSpan, Table, Label, Grid } from 'react-bootstrap';

const TECH_USED = [
  { name: 'Javascript', image: ''},
  { name: 'Node.js', image: ''},
  { name: 'React.js', image: ''},
  { name: 'Ruby', image: ''},
  { name: 'Rails', image: ''},
  { name: 'HTML', image: ''},
  { name: 'CSS', image: ''}
];


var tableStyle = {
  marginTop: 50,
  marginLeft: 30,
  marginRight: 30
};

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
        <Table responsive condensed style={tableStyle}>
          <thead>
            <tr>
              <th><h2>Programming Skillset</h2></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Javascript</td>
              <td>
                <img src='http://www.w3devcampus.com/wp-content/uploads/logoAndOther/logo_JavaScript.png' height='35' width='35' />
              </td>
            </tr>
            <tr>
              <td>Node.js</td>
              <td>
                <img src='https://node-os.com/images/nodejs.png' height='35' width='35' />
              </td>
            </tr>
            <tr>
              <td>React.js</td>
              <td>
                <img src='https://facebook.github.io/react/img/logo_og.png' height='35' width='35' />
              </td>
            </tr>
            <tr>
              <td>Ruby</td>
              <td>
                <img src='http://budiirawan.com/wp-content/uploads/2015/04/ruby-logo.png' height='35' width='35' />
              </td>
            </tr>
            <tr>
              <td>Rails</td>
              <td>
                <img src='https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Ruby_on_Rails.svg/791px-Ruby_on_Rails.svg.png' height='35' width='35' />
              </td>
            </tr>
          </tbody>
        </Table>
      </Grid>
    );
  }
}
