import React, { Component } from 'react';
import { signup } from '../../services/api.js';
import { Link } from 'react-router-dom';

import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";

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
      <p className="h1">Sign up</p>

      <form onSubmit={this.handleFormSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email address</Label>
        <Input
          type="email"
          name="email"
          value={this.state.email} 
          onChange={ e => this.handleChange(e)}
          id="exampleEmail"
          placeholder="Enter email"
        />
        <FormText color="muted">
          We'll never share your email with anyone else.
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          value={this.state.password}
          onChange={ e => this.handleChange(e)}
          placeholder="Password"
          autoComplete="off"
        />
      </FormGroup>
     
      <Button color="primary" type="submit" value="Signup">
        Sign up
      </Button>
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