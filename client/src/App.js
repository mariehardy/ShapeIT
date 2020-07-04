import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import LandingVideo from './components/Landing/LandingVideo';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Profile from './components/auth/Profile'
import ProfileEdit from './components/auth/ProfileEdit';
import Navbar from './components/navbar/Navbar';
import Calendar from './components/calendar/Calendar';
import DayDetails from './components/day/DayDetails';
import ExerciseDetails from './components/exercise/ExerciseDetails';

import { profileEdit } from './services/api';


class App extends Component {

  constructor(props){
    super(props)
    this.state = { 
      loggedInUser: this.props.user
    };
    console.log('this.state.loggedInUser ===== ', this.state.loggedInUser)
  }

  updateUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
    console.log('after updateUser: this.state.loggedInUser ===== ', this.state.loggedInUser)
  }



  render() {

    return (
      <div className="App">
        <Navbar userInSession={this.state.loggedInUser} updateUser={this.updateUser} />
        

        <Switch>
          <Route exact path='/' render={() => {
          if (!this.state.loggedInUser) {
            // if user is NOT logged in
              return <LandingVideo updateUser={this.updateUser}></LandingVideo>
            } else {
            // once user IS logged in, redirect to `/calendar`
              return <Redirect to={{pathname: '/calendar'}}/>
            }
          }} />
          
          <Route exact path='/signup' render={() => {
          if (!this.state.loggedInUser) {
            // if user is NOT logged in
              return <Signup updateUser={this.updateUser}></Signup>
            } else {
            // once user IS logged in, redirect to `/calendar`
              return <Redirect to={{pathname: '/calendar'}}/> 
            }
          }} />

          <Route exact path="/login" render={() => {
            if (!this.state.loggedInUser) {
            // if user is NOT logged in
              return <Login updateUser={this.updateUser}></Login>
            } else {
            // once user IS logged in, redirect to `/calendar`
              return <Redirect to={{pathname: '/calendar'}}/> 
            }
          }} />

          <Route exact path="/profile" render={() => {
            if (!this.state.loggedInUser) {
              // if user is NOT logged in, redirect to '/'
              return <Redirect to={{pathname: '/'}}/> 
            } else {
            // if user IS logged in, show calendar
            return <Profile loggedInUser = {this.state.loggedInUser} />
            }
          }} />

          <Route exact path="/profile-edit" render={() => {
            if (!this.state.loggedInUser) {
              // if user is NOT logged in, redirect to '/'
              return <Redirect to={{pathname: '/'}}/> 
            } else {
            // if user IS logged in, show calendar
            return <ProfileEdit updateUser={this.updateUser} loggedInUser={this.state.loggedInUser}/>
            }
          }} />
          
          <Route exact path="/calendar" render={() => {
            if (!this.state.loggedInUser) {
              // if user is NOT logged in, redirect to '/'
              return <Redirect to={{pathname: '/'}}/> 
            } else {
            // if user IS logged in, show calendar
            return <Calendar />
            }
          }} />

          <Route exact path="/day/:id" render={() => {
            if (!this.state.loggedInUser) {
              // if user is NOT logged in, redirect to '/'
              return <Redirect to={{pathname: '/'}}/> 
            } else {
            // if user IS logged in, show calendar
            return <DayDetails updateUser={this.updateUser} loggedInUser={this.state.loggedInUser}  />
            }
          }} />
          
          <Route exact path="/exercise/:id" render={() => {
            if (!this.state.loggedInUser) {
              // if user is NOT logged in, redirect to '/'
              return <Redirect to={{pathname: '/'}}/> 
            } else {
            // if user IS logged in, show calendar
            return <ExerciseDetails updateUser={this.updateUser} loggedInUser={this.state.loggedInUser}  />
            }
          }} />

        </Switch>
      </div>
    );
  }
}

export default App;