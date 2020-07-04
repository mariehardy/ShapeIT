import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class EditProfile extends Component {
  state = {
    email: this.props.loggedInUser.email,
    firstName: this.props.loggedInUser.firstName,
    lastName: this.props.loggedInUser.lastName,
    country: this.props.loggedInUser.country,
    city: this.props.loggedInUser.city,
    weight: this.props.loggedInUser.weight,
    height: this.props.loggedInUser.height,
    instagramID: this.props.loggedInUser.instagramID,
    redirect: false
    // email: this.props.theProject.email,
    // firstName: this.props.theProject.firstName,
    // lastName: this.props.theProject.lastName

  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    const email = this.state.email;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const country = this.state.country;
    const city = this.state.city;
    const weight = this.state.weight;
    const height = this.state.height;
    const instagramID = this.state.instagramID;

    axios.put(`/api/profile-edit`, { email, firstName, lastName })
      .then(response => {
        //response.data
        this.props.updateUser(response.data)
        this.setState({ redirect: true })
        
      })
      .catch(error => console.log(error))
  }

  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleChangeBirthday = (event) => {
    this.setState({
      birthday: event.target.value
    })
  }

  handleChangeLastCountry = (event) => {
    this.setState({
      country: event.target.value
    })
  }

  handleChangeLastCity = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  handleChangeLastWeight = (event) => {
    this.setState({
      weight: event.target.value
    })
  }

  handleChangeLastHeight = (event) => {
    this.setState({
      height: event.target.value
    })
  }

  handleChangeLastInstaURL = (event) => {
    this.setState({
      instagramID: event.target.value
    })
  }

  render() {
    return (
      <div>
        { this.state.redirect ? <Redirect to="/profile"></Redirect> : null}
        <hr />
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>

          <label>First Name:</label>
          <input type="text" name="firstName" value={this.state.firstName} onChange={e => this.handleChangeFirstName(e)} />
          <label>Last Name:</label>
          <input type="text" name="lastName" value={this.state.lastName} onChange={e => this.handleChangeLastName(e)} />
          <label>Date of Birth:</label>
          <input type="date" name="birthday" value={this.state.birthday} onChange={e => this.handleChangeLastBirthday(e)} />
          <label>Country:</label>
          <input type="text" name="country" value={this.state.country} onChange={e => this.handleChangeCountry(e)} />
          <label>City:</label>
          <input type="text" name="city" value={this.state.city} onChange={e => this.handleChangeCity(e)} />
          <label>Weight:</label>
          <input type="number" name="weight" value={this.state.weight} onChange={e => this.handleChangeWeight(e)} />
          <label>Height:</label>
          <input type="number" name="height" value={this.state.height} onChange={e => this.handleChangeHeight(e)} />
          <label>Instagram URL:</label>
          <input type="text" name="instagramID" value={this.state.instagramID} onChange={e => this.handleChangeInstaURL(e)} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditProfile;