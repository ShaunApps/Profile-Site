import React from 'react';
import {render} from 'react-dom';

class Profile extends React.Component {
  render() {
    var { name, age, bio, pic} = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <h4>Age: {age}</h4>
        <h4>Bio: {bio}</h4>
      </div>
    );
  }

}


React.render(<Profile name="Shaun Appelbaum" age={27} bio="I write code and lift weights."/>, document.getElementById('app'))
