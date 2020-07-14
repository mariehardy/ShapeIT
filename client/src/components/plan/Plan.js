import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { allDays } from '../../services/api'

import DayDetails from "../day/DayDetails";

class Plan extends Component {
  state = {
    listOfDays: [],
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
    
    // SORT DAYS IN ORDER
    let copiedListOfDays = [...this.state.listOfDays]
    let sortedListOfDays = copiedListOfDays.sort(function (a, b) {
       if (a.name > b.name) {
         return 1;
     } else {
         return -1;
     }
     })


    return (
      <div>
        {
          this.state.listOfDays 
          ? (
          <ul>
          {sortedListOfDays.map((el) => {
              console.log("el ========= ", el);
              console.log("this.props.loggedInUser.currentDay ========= ", this.props.loggedInUser.currentDay);
              return (
                <li key={el._id}>
                { el.name <= this.props.loggedInUser.currentDay
                  ? (
                  <Link to={"/day/" + el.name}>{el.name}</Link>
                  )
                  : (
                  <p>{el.name}</p>
                  )
                }
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
