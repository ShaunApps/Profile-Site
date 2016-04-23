import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    var { name, age, bio } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>age: {age}</p>
        <p>bio: {bio}</p>
      </div>
    );
  }
}

render(<App name="Shaun" age={27} bio="I lift weights and write code."/>, document.getElementById('app'));
