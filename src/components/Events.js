'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Button, ButtonToolbar, FormGroup, Glyphicon } from 'react-bootstrap';

export default class Events extends React.Component {

  render(){
    return(
      <div className="container">
        <h1>Events Settings</h1>
        <p>Configure Your Optimization Settings Below</p>
        <hr/><br/>
        <Checkboxes uid={this.props.location.query.uid}/>
        <ButtonToolbar>
          <Link to={{ pathname: '/', query: { uid: this.props.location.query.uid } }}>
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
    this.submitEvents = this.submitEvents.bind(this);

    this.state = {
      isEnabled: false,
      makeExcuse: false
    };
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.checked;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  submitEvents(event){
    console.log(this.props.uid);
    fetch('https://betterfriend.herokuapp.com/query/' + this.props.uid + '/events', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "data" : {
          "eventSettings": {
            "isEnabled": this.state.isEnabled,
            "makeExcuse": this.state.makeExcuse
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
          <h4>Respond Maybe to all Events:
            <input
              name="isEnabled"
              type="checkbox"
              checked={this.state.isEnabled}
              onChange={this.handleInputChange} />
          </h4>
        </label>
        <hr/><br/>
        <label>
          Post and Excuse:
          <input
            name="makeExcuse"
            type="checkbox"
            checked={this.state.makeExcuse}
            onChange={this.handleInputChange} />
        </label>
        <ButtonToolbar>
          <Button bsStyle="success" onClick={this.submitEvents}><Glyphicon glyph="floppy-disk" /> Save</Button>
        </ButtonToolbar>
      </form>
    );
  }
}
