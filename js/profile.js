var React = require('react');

class Profile extends React.Component {
  render() {
    var { name, age, bio, pic} = this.props;
    return (
      <div className="profile-box">
        <h2>{name}</h2>
        <h4>Age: {age}</h4>
        <h4>Bio: {bio}</h4>
      </div>
    );
  }

}



class ProjectsContainer extends React.Component {
  render() {
    var { name, image, link } = this.props;
    return (
      <div>
        <h3>{name}</h2>
        <a href={link}>
          <img src={image}>
        </a>
      </div>
    );
  }
}
// props
React.render(<Profile name="Shaun Appelbaum" age={27} bio="I write code and lift weights."/>, document.getElementById('app'))
React.render(<ProjectsContainer name="Couplr" image="placeholder" link="http://www.couplrapp.co/"/>, document.getElementById('app'));
;
