import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";


const DayDetails = (props) => {

console.log('props are ===== ' + props.match);

//state passed from Plan with list of all days

// let dayDetails = props.listOfDays.find((el) => el.videoUrl === props.match.params.id)
// console.log('dayDetails is === ' + dayDetails)

  return (
    <div>
      props name; {props.name}
      Name of dayDetails: {props.name}
    </div>
  );
}

export default DayDetails;