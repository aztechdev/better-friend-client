'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Button, ButtonToolbar, FormGroup, Glyphicon } from 'react-bootstrap';

export default class Birthdays extends React.Component {

  render(){
    return(
      <div className="container">
        <h1>Birthday Settings</h1>
        <p>Configure Your Optimization Settings Below</p>
        <hr/><br/>
        <Checkboxes uid={this.props.location.query.uid}/>
        <ButtonToolbar>
          <Link to={{ pathname: '/profile', query: { uid: this.props.location.query.uid } }}>
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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitBirthday = this.submitBirthday.bind(this);

    this.state = {
      isEnabled: false,
      callByName: false,
      useEmoji: false
    };
  }

  componentWillMount(){
    fetch('https://betterfriend.herokuapp.com/query/' + this.props.uid + '/birthday')
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      console.log(json);
      this.setState({callByName: json.data.birthdaySettings['callByName']});
      this.setState({isEnabled: json.data.birthdaySettings['isEnabled']});
      this.setState({useEmoji: json.data.birthdaySettings['useEmoji']});
    }.bind(this));
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
    console.log(this.props.uid);
    fetch('https://betterfriend.herokuapp.com/query/' + this.props.uid + '/birthday', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "data" : {
          "birthdaySettings": {
            "isEnabled": this.state.isEnabled,
            "useEmoji": this.state.useEmoji,
            "callByName": this.state.callByName
          }
        }
      })
    }).then((response) => {
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
          name="isEnabled"
          type="checkbox"
          checked={this.state.isEnabled}
          onChange={this.handleInputChange} />
          </h4>
      </label>
      <hr/><br/>
      <label>
        Address Person By Name:
        <input
          name="callByName"
          type="checkbox"
          checked={this.state.callByName}
          onChange={this.handleInputChange} />
      </label>
      <br/>
      <label>
        Use Emojis:
        <input
          name="useEmoji"
          type="checkbox"
          checked={this.state.useEmoji}
          onChange={this.handleInputChange} />
      </label>
      <ButtonToolbar>
        <Button bsStyle="success" onClick={this.submitBirthday}><Glyphicon glyph="floppy-disk" /> Save</Button>
      </ButtonToolbar>
      </form>
    );
  }
}
