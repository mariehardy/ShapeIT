import React, { Component } from 'react';
import { login } from '../../services/api.js'
import { Link } from 'react-router-dom';
import axios from 'axios'
import App from '../../App.css'

class Profile extends React.Component {

  state = {

  }

  render() {
    return (
      <div>
        <h1>Hello from Profile Page!</h1>
        <div className="container">
        <p><img src = {this.props.loggedInUser.avatarUrl}/></p>
        </div>
        {/* <p>My name is: {JSON.stringify(this.props.loggedInUser)}</p> */}
        <p>Email: {this.props.loggedInUser.email}</p>
        <p>Name: {this.props.loggedInUser.firstName}</p>
        <p>Surname: {this.props.loggedInUser.lastName}</p>
        <p>Birthday: {this.props.loggedInUser.birthday}</p>
        <p>Country: {this.props.loggedInUser.country}</p>
        <p>City: {this.props.loggedInUser.city}</p>
        <p>Weight: {this.props.loggedInUser.weight}</p>
        <p>Height: {this.props.loggedInUser.height}</p>
        <p>Current Day: {this.props.loggedInUser.currentDay}</p>
        <Link to={'/profile-edit'}>Edit Profile</Link>
      </div>
    )
  }

}


export default Profile;