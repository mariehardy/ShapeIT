import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import DayDetails from '../day/DayDetails'

class Plan extends Component {
  constructor() {
    super();
    this.state = { listOfDays: [] };
  }

  getAllDays = () => {
    axios.get("/api/day").then((response) => {
      this.setState({
        listOfDays: response.data,
      });
      console.log("listOfDays ====== ", this.state.listOfDays);
    });
  };

  componentDidMount() {
    this.getAllDays();
  }

  render() {
    return (
      <div>
        HERE IS THE PLAN - LIST OF DAYS
        <ul>
          {this.state.listOfDays.map((el) => {
            console.log("el ========= ", el);
            return (
              <li key={el._id}>
              <DayDetails 
                listOfDays={this.state.listOfDays} 
                name={el.name}
              />
              
                <Link to={"/day/" + el._id} >
                  {el.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Plan;
