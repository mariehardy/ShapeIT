import React, { Component } from 'react';
import { signup } from '../../services/api.js';
import { Link } from 'react-router-dom';
import GoogleLogo from '../../assets/img/shapeIT/Google__G__Logo.svg'


import {
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { 
      email: '', 
      password: '',
      errorMessage: ''
    };
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
      // .catch(error => console.log(error))
      .catch((error) => {
        console.log("ERROR !!")
        console.log(error.response)
        this.setState({
          errorMessage: error.response.data.message
        })
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  render() {
    return (
      <div>
      <p className="h1">Sign up</p>
      {this.state.errorMessage ? <p className="h3 text-danger margin-top">{this.state.errorMessage}</p> : null}

      <form onSubmit={this.handleFormSubmit} className="margin-top">
      <div className="form-row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
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
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          value={this.state.password}
          onChange={ e => this.handleChange(e)}
          placeholder="Enter password"
          autoComplete="off"
        />
      </FormGroup>
      </div>
      <div className="col-md-4"></div>
    </div>
      <Button color="primary btn-round margin-top" type="submit" value="Signup">
        Sign up
      </Button>

    </form>


    <div className="margin-top"><a href={process.env.REACT_APP_BACKEND_URL + "/api/google"}><img src={ GoogleLogo } alt="Google Logo" className="google-logo" /> Signup with Google</a></div>

        <p className="margin-top">Already have account?
            <Link to={"/login"}> Login</Link>
        </p>

      </div>
    )
  }
}

export default Signup;