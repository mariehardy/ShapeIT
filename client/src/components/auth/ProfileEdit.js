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
    avatarUrl: this.props.loggedInUser.avatarUrl,
    redirect: false
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    const email = this.state.email;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const birthday = this.state.birthday;
    const country = this.state.country;
    const city = this.state.city;
    const weight = this.state.weight;
    const height = this.state.height;
    const instagramID = this.state.instagramID;
    const avatarUrl = this.state.avatarUrl;

    axios.put(`/api/profile-edit`, { email,instagramID,firstName,lastName,birthday,country,city,weight,height,avatarUrl})
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

  handleChangeCountry = (event) => {
    this.setState({
      country: event.target.value
    })
  }

  handleChangeCity = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  handleChangeWeight = (event) => {
    this.setState({
      weight: event.target.value
    })
  }

  handleChangeHeight = (event) => {
    this.setState({
      height: event.target.value
    })
  }

  handleChangeInstaURL = (event) => {
    this.setState({
      instagramID: event.target.value
    })
  }

  handleFileUpload = (e) => {

    const uploadData = new FormData();
    uploadData.append("avatarUrl", e.target.files[0]);

    axios.post('/api/profile-edit', uploadData).then((resp) => {
      console.log(resp.data.avatarUrl)
      this.setState({
        avatarUrl: resp.data.avatarUrl
      })
    }).catch(error=>{
      console.log("post doesnt work because : =>",error)
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
          <input type="date" name="birthday" value={this.state.birthday} onChange={e => this.handleChangeBirthday(e)} />
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

          <input type="file" name="avatarUrl" onChange={e => this.handleFileUpload(e)} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditProfile;