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
    <h1>FBAuto Login</h1>
    <p>Welcome! Please Login</p>
    <br/>
    <Button href="https://betterfriend.herokuapp.com/auth/facebook" bsStyle="primary">
    <i className="fa fa-facebook-official" aria-hidden="true"></i> Login With Facebook!</Button>
  </div>
);
