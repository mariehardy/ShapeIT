import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import LandingVideo from './components/Landing/LandingVideo';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Profile from './components/auth/Profile'
import ProfileEdit from './components/auth/ProfileEdit';
import NavTop from './components/navbar/NavTop';
import NavBottom from './components/navbar/NavBottom';
import Plan from './components/plan/Plan';
import DayDetails from './components/day/DayDetails';
import ExerciseDetails from './components/exercise/ExerciseDetails';
import Share from './components/exercise/Share';
import Nutrition from '../src/components/nutrition/Nutrition';
import NutritionBasics from '../src/components/nutrition/NutritionBascis';
import NutritionHealthyMeal from '../src/components/nutrition/NutritionHealthyMeal';
import NutritionHowToEat from '../src/components/nutrition/NutritionHowToEat';
import Donate from './components/donate/Donate';

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
        <NavTop userInSession={this.state.loggedInUser} updateUser={this.updateUser} />

        <Switch>
          <Route exact path='/' render={() => {
          if (!this.state.loggedInUser) {
            // if user is NOT logged in
              return <LandingVideo updateUser={this.updateUser}></LandingVideo>
            } else {
            // if user IS logged in, redirect to `/plan`
              return <Redirect to={{pathname: '/plan'}}/>
            }
          }} />
          
          <Route exact path='/signup' render={() => {
          if (!this.state.loggedInUser) {
            // if user is NOT logged in
              return <Signup updateUser={this.updateUser}></Signup>
            } else {
            // once user IS logged in, redirect to `/profile-edit`
              return <Redirect to={{pathname: '/profile-edit'}}/> 
            }
          }} />

          <Route exact path="/login" render={() => {
            if (!this.state.loggedInUser) {
            // if user is NOT logged in
              return <Login updateUser={this.updateUser}></Login>
            } else {
            // once user IS logged in, redirect to `/plan`
              return <Redirect to={{pathname: '/plan'}}/> 
            }
          }} />

          <Route exact path="/profile" render={() => {
            if (!this.state.loggedInUser) {
              // if user is NOT logged in, redirect to '/'
              return <Redirect to={{pathname: '/'}}/> 
            } else {
            // if user IS logged in, show route
            return <Profile updateUser={this.updateUser} loggedInUser = {this.state.loggedInUser} />
            }
          }} />

          <Route exact path="/profile-edit" render={() => {
            if (!this.state.loggedInUser) {
              // if user is NOT logged in, redirect to '/'
              return <Redirect to={{pathname: '/'}}/> 
            } else {
            // if user IS logged in, show route
            return <ProfileEdit updateUser={this.updateUser} loggedInUser={this.state.loggedInUser}/>
            }
          }} />
          
          <Route exact path="/plan" render={() => {
            if (!this.state.loggedInUser) {
              // if user is NOT logged in, redirect to '/'
              return <Redirect to={{pathname: '/'}}/> 
            } else {
            // if user IS logged in, show route
            return <Plan updateUser={this.updateUser} loggedInUser={this.state.loggedInUser} />
            }
          }} />

          <Route exact path="/day/:id" render={(props) => {
            if (!this.state.loggedInUser) {
              // if user is NOT logged in, redirect to '/'
              return <Redirect to={{pathname: '/'}}/> 
            } else {
            // if user IS logged in, show route
            return <DayDetails updateUser={this.updateUser} loggedInUser={this.state.loggedInUser} {...props} />
            }
          }} />
          
          <Route exact path="/exercise/:id" render={(props) => {
            if (!this.state.loggedInUser) {
              // if user is NOT logged in, redirect to '/'
              return <Redirect to={{pathname: '/'}}/> 
            } else {
            // if user IS logged in, show route
            return <ExerciseDetails updateUser={this.updateUser} loggedInUser={this.state.loggedInUser} {...props} />
            }
          }} />

          <Route exact path="/increaseCurrentDay" render={() => {
            if (!this.state.loggedInUser) {
              // if user is NOT logged in, redirect to '/'
              return <Redirect to={{pathname: '/'}}/> 
            } else {
            // if user IS logged in, show route
              return <Redirect to={{pathname: '/share'}}/> 
            }
          }} />

          <Route exact path="/share" render={() => {
            if (!this.state.loggedInUser) {
              // if user is NOT logged in, redirect to '/'
              return <Redirect to={{pathname: '/'}}/> 
            } else {
            // if user IS logged in, show route
            return <Share updateUser={this.updateUser} loggedInUser={this.state.loggedInUser}  />
            }
          }} />

          <Route exact path="/nutrition" render={() => {
            if (!this.state.loggedInUser) {
              // if user is NOT logged in, redirect to '/'
              return <Redirect to={{pathname: '/'}}/> 
            } else {
            // if user IS logged in, show route
            return <Nutrition updateUser={this.updateUser} loggedInUser={this.state.loggedInUser} />
            }
          }} />

          <Route exact path="/nutrition-basics" render={() => {
            if (!this.state.loggedInUser) {
              // if user is NOT logged in, redirect to '/'
              return <Redirect to={{pathname: '/'}}/> 
            } else {
            // if user IS logged in, show route
            return <NutritionBasics updateUser={this.updateUser} loggedInUser={this.state.loggedInUser} />
            }
          }} />

          <Route exact path="/nutrition-how-to-eat" render={() => {
            if (!this.state.loggedInUser) {
              // if user is NOT logged in, redirect to '/'
              return <Redirect to={{pathname: '/'}}/> 
            } else {
            // if user IS logged in, show route
            return <NutritionHowToEat updateUser={this.updateUser} loggedInUser={this.state.loggedInUser} />
            }
          }} />

          <Route exact path="/nutrition-healthy-meals" render={() => {
            if (!this.state.loggedInUser) {
              // if user is NOT logged in, redirect to '/'
              return <Redirect to={{pathname: '/'}}/> 
            } else {
            // if user IS logged in, show route
            return <NutritionHealthyMeal updateUser={this.updateUser} loggedInUser={this.state.loggedInUser} />
            }
          }} />

          <Route exact path="/donate" render={() => {
            if (!this.state.loggedInUser) {
              // if user is NOT logged in, redirect to '/'
              return <Redirect to={{pathname: '/'}}/> 
            } else {
            // if user IS logged in, show route
            return <Donate updateUser={this.updateUser} loggedInUser={this.state.loggedInUser} />
            }
          }} />

        </Switch>

        <NavBottom userInSession={this.state.loggedInUser} updateUser={this.updateUser} />

      </div>
    );
  }
}

export default App;