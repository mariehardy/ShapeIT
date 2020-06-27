// https://medium.com/@zoejoyuliao/add-google-sign-in-and-sign-out-to-your-react-app-and-get-the-accesstoken-2ee16bfd8297

import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';


const CLIENT_ID = '529044363864-3llicnjsg4lq0dnpkcinmmpn93vgril9.apps.googleusercontent.com';


class GoogleBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    if(response.access_token){  // response.Zi.access_token

      this.setState(state => ({
        isLogined: true,
        accessToken: response.access_token  // response.Zi.access_token
      }));
    }
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
  }

  handleLoginFailure (response) {
    alert('Failed to google log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to google log out')
  }

  render() {
    return (
    <div>
      { this.state.isLogined ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        >
        </GoogleLogout>
        : <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText='Login'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        />
      }
      { this.state.accessToken ? <h5>Your Access Token: <br/><br/> { this.state.accessToken }</h5> : null }

    </div>
    )
  }
}

export default GoogleBtn;