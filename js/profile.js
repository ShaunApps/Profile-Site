var React = require('react');

class Profile extends React.Component {
  render() {
    var { name, age, bio, pic} = this.props;
    return (
      <div className="profile-box">
        <h2>{name}</h2>
        <h4>Age: {age}</h4>
        <h4>Bio: {bio}</h4>
        <img src={pic} height={100} />
      </div>
    );
  }

}
// props
React.render(<Profile name="Shaun Appelbaum" age={27} bio="I write code and lift weights." pic="" />, document.getElementById('app'));
