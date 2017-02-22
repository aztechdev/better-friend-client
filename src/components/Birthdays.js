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
        <Checkboxes/>
        <ButtonToolbar>
        <Link to="/">
          <Button bsStyle="warning"><Glyphicon glyph="arrow-left" /> Back</Button>
        </Link>
        </ButtonToolbar>
      </div>
    );
  }
}


class Checkboxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBirthdayEnabled: false,
      addressPersonByName: false,
      useEmojis: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitBirthday = this.submitBirthday.bind(this);
  }

  handleInputChange(event){
      const target = event.target;
      const value = target.checked;
      const name = target.name;

      this.setState({
        [name]: value
      });
  }

  submitBirthday(event){

    fetch('http://localhost:3000/query/106786933180363/birthday', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "data" : {
          "birthdaySettings": {
            "isEnabled": this.state.isBirthdayEnabled,
            "useEmoji": this.state.useEmojis,
            "callByName": this.state.addressPersonByName
          }
        }
      })
    }).then((response) => {
      alert("foo");
      if(response.status == 200){
        alert("Update successful!")
      } else{
        alert("Update Failed!")
      }
    });

  }

  render() {
    return (
      <form>
      <label>
        <h4>Enable Birthday Optimizations:
        <input
          name="isBirthdayEnabled"
          type="checkbox"
          checked={this.state.isBirthdayEnabled}
          onChange={this.handleInputChange} />
          </h4>
      </label>
      <hr/><br/>
      <label>
        Address Person By Name:
        <input
          name="addressPersonByName"
          type="checkbox"
          checked={this.state.addressPersonByName}
          onChange={this.handleInputChange} />
      </label>
      <br/>
      <label>
        Use Emojis:
        <input
          name="useEmojis"
          type="checkbox"
          checked={this.state.useEmojis}
          onChange={this.handleInputChange} />
      </label>
      <ButtonToolbar>
        <Button bsStyle="success" onClick={this.submitBirthday}><Glyphicon glyph="floppy-disk" /> Save</Button>
      </ButtonToolbar>
      </form>
    );
  }
}
