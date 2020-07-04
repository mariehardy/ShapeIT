import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Plan extends Component {
  constructor() {
    super();
    this.state = { listOfDays: [] };
  }

  getAllDays = () => {
    axios.get("/api/day").then((responseFromApi) => {
      this.setState({
        listOfDays: responseFromApi.data,
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
                <Link to={"/day/" + el._id} listOfDays={this.state.listOfDays}>
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
