import React, { Component } from 'react';
import { login } from '../../api'
import { Link } from 'react-router-dom';


class Login extends Component {
  constructor(props){
    super(props);
    this.state = { email: '', password: '' };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    login(email, password)
    .then( response => {
        this.setState({ 
          email: "", 
          password: "" 
        });
        this.props.updateUser(response)
    })
    .catch( error => console.log(error) )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
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