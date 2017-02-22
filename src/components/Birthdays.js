'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Button, ButtonToolbar, Checkbox, Collapse, Form, FormGroup, Glyphicon, Well } from 'react-bootstrap';

export default class Birthdays extends React.Component {

  render(){
    return(
      <div className="container">
        <h1>Birthday Settings</h1>
        <p>Configure Your Optimization Settings Below</p>
        <hr/><br/>
        <Toggle/>
        <ButtonToolbar>
        <Link to="/">
          <Button bsStyle="warning"><Glyphicon glyph="arrow-left" /> Back</Button>
        </Link>
        </ButtonToolbar>
      </div>
    );
  }
}

class SettingsForm extends React.Component {

  render(){
    return(
      <Form horizontal>
          <FormGroup>
              <Checkbox>Use Emojis</Checkbox>
          </FormGroup>
          <FormGroup>
              <Checkbox>Address Person By Name</Checkbox>
          </FormGroup>
        <FormGroup>
            <ButtonToolbar>
            <Link to="/">
              <Button bsStyle="success" type="submit"><Glyphicon glyph="floppy-disk" /> Save</Button>
            </Link>
            </ButtonToolbar>
        </FormGroup>
      </Form>
    );
  }

}

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
          Toggle Settings
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <SettingsForm/>
          </div>
        </Collapse>
      </div>
    );
  }
}
