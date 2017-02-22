'use strict';

import React from 'react';
import { Button } from 'react-bootstrap';

export default class LoginPage extends React.Component {

  render(){
    return loginSection;
  }
}

const loginSection = (
  <div className="container">
    <h1>LOGIN PAGE YO</h1>
    <p>Welcome! Please Login</p>
    <hr/><br/>
    <Button href="/auth/facebook" bsStyle="primary">Login With Facebook!</Button>
  </div>
);
