import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
    axios.get("/api/day/" + this.props.match.params.id)
    .then((response) => {
      // console.log("response from singleDay is ==== " + response.data);
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








  



// {this.state.singleDay.map((el) => {
//   return (
//     <div key={el._id}>
//       {el.name}
//     </div>
//   );
// })}  

        // {/* <p>{JSON.stringify(this.props.match, null, 2)}</p> */}



    //     <div>day's name : {this.state.singleDay[0].name}
    //  // exercise's name : {this.state.singleDay.exercises}</div>


  render() {
    return (
      <div>
        {
          this.state.singleDay 
          ? 

          // TO DO::: SORT EXERCISES BY TYPES !!!!!!!!

          this.state.singleDay.map((el) => {
            return (
              <Link to={"/exercise/" + el._id}>
              {/* // <Link to={"/day/:dayId/exercise/:exerciseId/" + el.name}> */}
                <div className="day-exercise-box" key={el._id}>
                  <div className="day-exercise-thumbnail-box">
                    <img src={el.thumbnail} alt={el.name} />
                  </div>
                  <div className="day-exercise-details-box">
                    <p className="day-exercise-name">
                      {el.name}
                    </p>
                    <p className="day-exercise-repSec">
                      {el.repSec}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })

        : (
          'LOADING ...'
          )
        }
      </div>
    );
  }
}

export default DayDetails;