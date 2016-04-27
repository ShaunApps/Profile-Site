import React from 'react';
import {render} from 'react-dom';

const TECH_USED = [
  { name: 'Javascript', image: ''},
  { name: 'Node.js', image: ''},
  { name: 'React.js', image: ''},
  { name: 'Ruby', image: ''},
  { name: 'Rails', image: ''},
  { name: 'HTML', image: ''},
  { name: 'CSS', image: ''}
];


export default class SkillSetRow extends React.Component {
  render() {
    return (
      <tr>
        <td colSpan="4">{this.props.skill.name}</td>
        <td colSpan="4">{this.props.skill.image}</td>
      </tr>
    );
  }
}

export default class SkillSetBox extends React.Component {
  render() {
    var rows = [];
    this.props.skill.forEach(function(skill) {
      rows.push(<SkillSetRow skill={skill} key={skill.name} />);
}
    return (
      <table>
        <thead>
          <tr>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>{ rows }</tbody>
      </table>

    );
  }
}
