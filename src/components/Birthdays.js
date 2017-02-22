'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Button, ButtonToolbar, Checkbox, Collapse, FormGroup, Glyphicon, Well } from 'react-bootstrap';

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
/*
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
*/

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
            <Derp/>
          </div>
        </Collapse>
      </div>
    );
  }
}

class Derp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressPersonByName: false,
      useEmojis: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.showMe = this.showMe.bind(this);
  }

  handleInputChange(event){
      const target = event.target;
      const value = target.checked;
      const name = target.name;

      this.setState({
        [name]: value
      });
  }

  showMe(event){
    alert(this.state.useEmojis);
  }

  render() {
    return (
      <form>
      <label>
        Address Person By Name:
        <input
          name="addressPersonByName"
          type="checkbox"
          checked={this.state.addressPersonByName}
          onChange={this.handleInputChange} />
      </label>
        <label>
          Use Emojis:
          <input
            name="useEmojis"
            type="checkbox"
            checked={this.state.useEmojis}
            onChange={this.handleInputChange} />
        </label>
        <ButtonToolbar>
        <Link to="/">
          <Button bsStyle="success" type="submit" onClick={this.showMe}><Glyphicon glyph="floppy-disk" /> Save</Button>
        </Link>
        </ButtonToolbar>
      </form>
    );
  }
}

// <input type="text" ref={(input) => this.input = input} />

//<Checkbox inputRef={ref => { this.input = ref; }}>Use Emojis</Checkbox>
//<Checkbox inputRef={ref => { this.input = ref; }}>Address Person By Name</Checkbox>
