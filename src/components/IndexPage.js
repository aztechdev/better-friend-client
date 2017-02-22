'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';

export default class IndexPage extends React.Component {

  render(){
    return menuSection;
  }
}

const menuSection = (
  <div className="container">
    <h1>Welcome Back!</h1>
    <p>Configure Your Optimization Settings Below</p>
    <hr/><br/>
    <ButtonToolbar>
    <Link to="/login">
      <Button bsStyle="primary" bsSize="large"><Glyphicon glyph="gift" /> Birthdays</Button>
    </Link>
    <Link to="/login">
      <Button bsStyle="primary" bsSize="large"><Glyphicon glyph="user" /> Profile Pic</Button>
    </Link>
    </ButtonToolbar>
  </div>
);
