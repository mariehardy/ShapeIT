import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Navbar from './components/navbar/Navbar';
import Calendar from './components/calendar/Calendar';
import DayDetails from './components/day/DayDetails';
import ExerciseDetails from './components/exercise/ExerciseDetails';



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
  }

  render() {
    return (
      <div className="App">
        <Navbar userInSession={this.state.loggedInUser} updateUser={this.updateUser} />
        <Switch>
          <Route exact path='/signup' render={() => <Signup updateUser={this.updateUser}></Signup>}/>
          <Route exact path="/login" render={() => <Login updateUser={this.updateUser}></Login>} />
          <Route exact path="/calendar" render={() => {
            if (this.state.loggedInUser) {
              return <Calendar />
            } else {
            // if the user is not logged in, redirects to `/`
              return <Redirect to={{pathname: '/'}}/> 
            }
          }} />
          <Route exact path="/day/:id" component={DayDetails} />
          <Route exact path="/exercise/:exerciseId" component={ExerciseDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;