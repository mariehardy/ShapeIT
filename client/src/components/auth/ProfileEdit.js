import React, { Component } from 'react';
import axios from 'axios';

class EditProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
        // email: this.props.theProject.email,
        // firstName: this.props.theProject.firstName,
        // lastName: this.props.theProject.lastName
    }
  }


  handleFormSubmit = (event) => {
    event.preventDefault()

    const email = this.state.email;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;

    axios.put(`/api/profile-edit`, { email, firstName, lastName })
    .then(response => response.data)
    .catch( error => console.log(error) )
  }

  handleChangeEmail = (event) => {  
    this.setState({
      email:event.target.value
    })
  }

  handleChangeFirstName = (event) => {  
    this.setState({
      firstName:event.target.value
    })
  }

  handleChangeLastName = (event) => {  
    this.setState({
      lastName:event.target.value
    })
  }

  render(){
    return (
      <div>
        <hr />
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Email:</label>
          <input type="text" name="email" value={this.state.email} onChange={e => this.handleChangeEmail(e)}/>
          <label>First Name:</label>
          <input name="firtsName" value={this.state.firstName} onChange={e => this.handleChangeFirstName(e)} />
          <label>Last Name:</label>
          <input name="lastName" value={this.state.lastName} onChange={e => this.handleChangeLastName(e)} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditProfile;