'use strict';

import React from 'react';

export default class IndexPage extends React.Component {

  renderMainPage() {
    if (this.props.loggedIn) {
      return homeSection;
    } else {
      return loginSection;
    }
  }

  render(){
    return(
      <div>
        <h1>My Super React App</h1>
        { this.renderMainPage() }
      </div>
    );
  }
}

IndexPage.propTypes = {
  loggedIn: React.PropTypes.bool
}

IndexPage.defaultProps = {
  loggedIn: true
}

const loginSection = (
  <div className="login">
    <p>Please Login</p>
  </div>
);

const homeSection = (
  <div className="home">
    <p>Welcome!</p>
  </div>
);
