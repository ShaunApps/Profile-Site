import React from 'react';
import {render} from 'react-dom';
import NavBar from './navbar.jsx';

class App extends React.Component {
  render () {
    var { name, age, bio } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>bio: {bio}</p>
      </div>
    );
  }
}


render(<NavBar />, document.getElementById('nav'));
render(<App name="Shaun" bio="I lift weights and write code."/>, document.getElementById('app'));
