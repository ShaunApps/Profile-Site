import React from 'react';
import {render} from 'react-dom';
import { Row, Col, colSpan, Table, Label, Grid, ProgressBar } from 'react-bootstrap';



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
        <td className="col-md-2"><h5>{this.props.skill.name}</h5></td>
        <td className="col-md-3"><img src={this.props.skill.image} height='50' width='50' /></td>
        <td className="col-md-5"><ProgressBar bsStyle="info" now={this.props.skill.exp} /></td>
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
        <Table className="col-lg-12" responsive condensed style={tableStyle}>
          <thead>
            <tr>
              <th><h2>Programming Skills</h2></th>
            </tr>
          </thead>
          <tbody>{ rows }</tbody>
        </Table>
        
      </Grid>
    );
  }
}
