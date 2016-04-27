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
      <table class="table-responsive" >
        <thead>
          <tr>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td colSpan="4">Javascript</td>
          <td colSpan="4"><img src='http://www.w3devcampus.com/wp-content/uploads/logoAndOther/logo_JavaScript.png' height='100' width='100' /></td>
        </tr>
        <tr>
          <td colSpan="4">Node.js</td>
          <td colSpan="4"><img src='https://node-os.com/images/nodejs.png' height='100' width='100' /></td>
        </tr>
        <tr>
          <td colSpan="4">React.js</td>
          <td colSpan="4"><img src='https://facebook.github.io/react/img/logo_og.png' height='100' width='100' /></td>
        </tr>
        <tr>
          <td colSpan="4">Ruby</td>
          <td colSpan="4"><img src='http://budiirawan.com/wp-content/uploads/2015/04/ruby-logo.png' height='100' width='100' /></td>
        </tr>
        <tr>
          <td colSpan="4">HTML & CSS</td>
          <td colSpan="4"><img src='http://www.itbaloch.com/wp-content/uploads/2015/06/html-css.jpg' height='75' width='100' /></td>
        </tr>
        </tbody>
      </table>

    );
  }
}
