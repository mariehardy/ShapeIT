import React, { Component } from 'react';
import { signup } from '../../services/api.js';

import { Link } from 'react-router-dom';


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { email: '', password: '' };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    signup(email, password)
      .then(response => {
        this.setState({
          email: "",
          password: "",
        });
        this.props.updateUser(response)
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Email:</label>
          <input type="text" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />

          <label>Password:</label>
          <input type="text" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />

          <input type="submit" value="Signup" />
        </form>

        <a href={process.env.REACT_APP_BACKEND_URL + "/api/google"}>log in with google</a> 

        <p>Already have account?
            <Link to={"/login"}> Login</Link>
        </p>

      </div>
    )
  }
}

export default Signup;