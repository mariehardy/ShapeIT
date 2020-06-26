import React, { Component } from 'react';
import { login } from '../../api'
import { Link } from 'react-router-dom';
import axios from 'axios';



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

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   const email = this.state.email;
  //   const password = this.state.password;

  //   login(email, password)
  //   .then(response => {
  //       this.props.updateUser(response.data)
  //       this.setState({ 
  //         email: "", 
  //         password: "" 
  //       });
  //   })
  //   .catch( error => console.log(error) )
  // }

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
        <form onSubmit={this.handleFormSubmit}>
          <label>email:</label>
          <input type="text" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
          <label>Password:</label>
          <input type="text" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          <input type="submit" value="Login" />
        </form>
        <p>Don't have account? 
           <Link to={"/signup"}> Signup</Link>
        </p>
      </div>
    )
  }
}

export default Login;