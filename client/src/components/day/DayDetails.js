import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";


class DayDetails extends Component {
  state = {
    singleDay: null,
  };

  getSingleDay = () => {
    console.log('this.props of DayDetails is ==== ' + this.props)

    // axios.get("/api/day" + this.props.match.params.id).then((response) => {
    //   console.log('getSingleDay response.data ====== ',response.data)

    //   this.setState({
    //     singleDay: response.data[0],
    //   });
    //   console.log("singleDay ====== ", this.state.singleDay);
    // });
  };

  componentDidMount() {
    this.getSingleDay();


    // EXAMPLE FROM IRONBEER LAB :::::::::::::
    // axios
    //   .get('https://ih-beers-api2.herokuapp.com/beers/' + this.props.match.params.beerId)
    //   .then((response) => {
    //     console.log('ONEBEER response.data is ===== ', response.data);
    //     this.setState({
    //       beer: response.data,
    //     });
    //   });



    // let dayDetails = this.props.listOfDays.find((el) => el._id === this.props.match.params.id)
    // console.log('dayDetails is === ', dayDetails)

  }

  // TO DELETE??
  // state passed from Plan with list of all days
  // let dayDetails = props.listOfDays.find((el) => el._id === this.props.match.params.id)
  // console.log('dayDetails is === ', dayDetails)

render () {
  return (
    <div>
    {/* <ul> */}
      {/* <li><img src={dayDetails.thumbnail} alt={dayDetails.name}></img></li>
      <li>props name; {dayDetails.name}</li>
      <li>Name of dayDetails: {dayDetails.name}</li> */}
    {/* </ul> */}


    {
            this.state.singleDay 
            ? <div>day's name : {this.state.name} </div>
            : (
                'LOADING ...'
                )
        }
    </div>
  );
}
}

export default DayDetails;