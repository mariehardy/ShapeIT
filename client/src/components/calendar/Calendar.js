import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Calendar extends Component {
  constructor(){
      super();
      this.state = { listOfdays: [] };
  }

  getAllDays = () =>{
    axios.get("/api/day")
    .then(responseFromApi => {
      this.setState({
        listOfDays: responseFromApi.data
      })
    })
  }

  componentDidMount() {
    this.getAllDays();
  }

  render(){
    return (
    <div>
    HERE IS THE CALENDAR - LIST OF DAYS
        <ul>
        {this.state.listOfdays.map((el) => {
    return (
      <li key={el._id}>
        <h3><Link to={"/day" + el._id}>{el.name}</Link></h3>
      </li>
    )
  })}
        </ul>
    </div>
  )
  }
}

export default Calendar;