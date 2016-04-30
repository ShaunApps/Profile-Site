import React from 'react';
import {render} from 'react-dom';
import { Row, Col, colSpan, Table, Label, Grid } from 'react-bootstrap';



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
        <td>{this.props.skill.name}</td>
        <td><img src={this.props.skill.image} height='35' width='35' /></td>
      </tr>
    );
  }
}
// calls SkillSet Row on each element in data passed down and formats it
export default class SkillSetBox extends React.Component {
  render() {
    var rows = [];
    this.props.skill.forEach(function(skill) {
      rows.push(<SkillSetRow skill={skill} />);
    });
    return (
      <Grid>
        <Table responsive condensed style={tableStyle}>
          <thead>
            <tr>
              <th><h2>Programming Skillset</h2></th>
            </tr>
          </thead>
          <tbody>{ rows }</tbody>
        </Table>
      </Grid>
    );
  }
}
