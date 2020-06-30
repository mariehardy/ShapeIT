import React, { Component } from 'react';
import { login } from '../../api'
import { Link } from 'react-router-dom';

class Profile extends React.Component {

  state = {

  }

  render() {
    return (
      <div>
        <h1>Hello from Profile Page!</h1>
        <p>My name is: {JSON.stringify(this.props.loggedInUser)}</p>
      </div>
    )
  }

}


export default Profile;