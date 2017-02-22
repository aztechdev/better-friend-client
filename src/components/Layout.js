// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src="/img/fbauto-icon.png"/>
          </Link>
          <h1>FBAuto: Optimizing Your Social Interactions</h1>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            FBAuto is using <strong>React</strong> and <strong>Express</strong>.
          </p>
        </footer>
      </div>
    );
  }
}
