import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { singleDay } from "../../services/api";

class DayDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleDay: null,
    };
  }

  getSingleDay = () => {
    console.log("this.props.match of DayDetails is ==== " + this.props.match);
    // singleDay()
    axios.get("/api/day/" + this.props.match.params.id).then((response) => {
      console.log("response from singleDay is ==== " + response.data);
      this.setState({
        singleDay: response.data,
      });
      console.log("singleDay ====== ", this.state.singleDay);
    });
  };

  componentDidMount() {
    this.getSingleDay();


    // let dayDetails = this.props.listOfDays.find((el) => el._id === this.props.match.params.id)
    // console.log('dayDetails is === ', dayDetails)
  }

  // TO DELETE??
  // state passed from Plan with list of all days
  // let dayDetails = props.listOfDays.find((el) => el._id === this.props.match.params.id)
  // console.log('dayDetails is === ', dayDetails)






  // {this.state.singleDay.exercises.map((el) => {
  //   return (
  //     <li key={el._id}>
  //       {el.name}
  //     </li>
  //   );
  // })}
  // </ul>






  render() {
    return (
      <div>
        {/* <p>{JSON.stringify(this.props.match, null, 2)}</p> */}
        {
            this.state.singleDay 
            ? <div>day's name : {this.state.singleDay.name}
             // exercise's name : {this.state.singleDay.exercises}</div>
            : (
                'LOADING ...'
                )
        }
      </div>
    );
  }
}

export default DayDetails;