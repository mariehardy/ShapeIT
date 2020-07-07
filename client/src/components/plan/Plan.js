import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { allDays } from '../../services/api'

import DayDetails from "../day/DayDetails";

class Plan extends Component {
  state = {
    listOfDays: [],
    isCurrentDay: false
  }

  getAllDays = () => {
        allDays()
        .then(response => {
          this.setState({
            listOfDays: response,
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
        {
          this.state.listOfDays 
          ? (
          <ul>
            {this.state.listOfDays.map((el) => {
              console.log("el ========= ", el);
              return (
                <li key={el._id}>
                  
                  <Link to={"/day/" + el.name}>{el.name}</Link>
                  {/* Same as: */}
                  {/* <Link to={`/day/${el._id}`}>{el.name}</Link> */}
                </li>
              );
            })}
          </ul>
          ) 
          : (
          "LOADING ..."
          )
        }
      </div>
    );
  }
}

export default Plan;
