'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class IndexPage extends React.Component {

  componentWillMount(){
    fetch('https://betterfriend.herokuapp.com/query/' + this.props.location.query.uid + '/birthday')
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      console.log(json);
    });
  }

  render(){
    console.log("User ID: " + this.props.location.query.uid);

    return (<div className="container">
      <h1>Welcome Back! {json.data.name}</h1>
      <p>Configure Your Optimization Settings Below</p>
      <hr/><br/>
      <ButtonToolbar>
        <Link to={{ pathname: '/bdaySettings', query: { uid: this.props.location.query.uid } }}>
          <Button bsStyle="primary" bsSize="large"><Glyphicon glyph="gift" /> Birthdays</Button>
        </Link>
        <Link to={{ pathname: '/eventSettings', query: { uid: this.props.location.query.uid } }}>
          <Button bsStyle="primary" bsSize="large"><Glyphicon glyph="calendar" />Events</Button>
        </Link>
      </ButtonToolbar>
    </div>);
  }
}
