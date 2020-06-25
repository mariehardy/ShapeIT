import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Calendar extends Component {
  constructor(){
      super();
      this.state = { listOfProjects: [] };
  }

  // getAllProjects = () =>{
  //   axios.get("/api/projects")
  //   .then(responseFromApi => {
  //     this.setState({
  //       listOfProjects: responseFromApi.data
  //     })
  //   })
  // }

  // componentDidMount() {
  //   this.getAllProjects();
  // }

  render(){
    return(
      <div>
        
         30 DAYS ARE DISPLAYED HERE
        
      </div>
    )
  }
}

export default Calendar;