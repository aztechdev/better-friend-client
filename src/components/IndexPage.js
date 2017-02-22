'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';

export default class IndexPage extends React.Component {

  render(){
    console.log("Param: " + this.props.location.query.uid);

    return <div className="container">
      <h1>Welcome Back !</h1>
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
    </div>;
  }
}
