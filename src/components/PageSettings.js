'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Button, ButtonToolbar, FormGroup, Glyphicon } from 'react-bootstrap';

export default class PageSettings extends React.Component {

  render(){
    return(
      <div className="container">
        <h1>Page Settings</h1>
        <p>Configure Your Optimization Settings Below</p>
        <hr/>
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
    this.submitEvents = this.submitEvents.bind(this);

    this.state = {
      pagesEnabled: false
    };
  }

  componentWillMount(){
    fetch('https://betterfriend.herokuapp.com/query/' + this.props.uid + '/pages')
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      console.log(json);
      this.setState({pagesEnabled: json.data['pagesEnabled']});
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

  submitEvents(event){
    console.log(this.props.uid);
    fetch('https://betterfriend.herokuapp.com/query/' + this.props.uid + "/pages",  {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "data" : {
          "pagesEnabled" : this.state.pagesEnabled
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
          <h4>Automate away your Social Media Ambassador:
            <input
              name="isEnabled"
              type="checkbox"
              checked={this.state.isEnabled}
              onChange={this.handleInputChange} />
          </h4>
        </label>
        <hr/>
          <Button bsStyle="success" onClick={this.submitEvents}><Glyphicon glyph="floppy-disk" /> Save</Button>
      </form>
    );
  }
}
