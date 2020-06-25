import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import ProjectList from './components/projects/ProjectList';
import Navbar from './components/navbar/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';
import TaskDetails from './components/tasks/TaskDetails';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';



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
          <Route exact path="/projects" render={() => {
            if (this.state.loggedInUser) {
              return <ProjectList />
            } else {
            // if the user is not logged in, redirects to `/`
              return <Redirect to={{pathname: '/'}}/> 
            }
          }} />
          {/* <Route exact path="/projects/:id" component={ProjectDetails} />
          <Route exact path="/tasks/:taskId" component={TaskDetails} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;