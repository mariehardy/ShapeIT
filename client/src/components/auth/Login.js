import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { login } from '../../services/api.js'
import GoogleLogo from '../../assets/img/shapeIT/Google__G__Logo.svg'


import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";


class Login extends Component {
  constructor(props){
    super(props);
    this.state = { 
      email: '', 
      password: '', 
      errorMessage: ''
    };
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const email = this.state.email;
    const password = this.state.password;

    axios.post("/api/login", { email, password })
      // 2xx status code
      .then((resp) => {
        this.props.updateUser(resp.data)
        this.setState({ email: "", password: "" });

      }).catch((error) => {
        console.log("ERROR !!")
        console.log(error.response)
        this.setState({
          errorMessage: error.response.data.message
        })
      })
  }
    
    
  render(){
    return(
      <div>
      <p className="h1">Login</p>

      <form onSubmit={this.handleFormSubmit} className="margin-top">
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
     
      <Button color="primary" type="submit" value="Login" className="btn-round margin-top">
        Login
      </Button>
    </form>

        <div className="margin-top"><a href={process.env.REACT_APP_BACKEND_URL + "/api/google"}><img src={ GoogleLogo } alt="Google Logo" className="google-logo" /> Login with Google</a></div>
        <p className="margin-top">Don't have account? 
           <Link to={"/signup"}> Signup</Link>
        </p>
      </div>
    )
  }
}

export default Login;