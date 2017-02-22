// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router';
import { Glyphicon } from 'react-bootstrap';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src="/img/fbauto-icon.png"/>
          </Link>
          <h1>Better Friend: Optimizing Your Social Interactions</h1>
        </header>
        <div className="app-content">{this.props.children}</div>
        <hr/>
        <footer>
          <p>
            Better Friend is using <strong>React</strong> and <strong>Express</strong>.<br/>
            Developed with love by Jan, Jarrett, Jon, & Andrew. <Glyphicon glyph="heart-empty" />
          </p>
        </footer>
      </div>
    );
  }
}
