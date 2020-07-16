import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { singleDay } from "../../services/api";
import "./DayDetails.css"

class DayDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleDay: null,
    };
  }

  getSingleDay = () => {
    // singleDay()
    axios.get("/api/day/" + this.props.match.params.id)
    .then((response) => {
      this.setState({
        
        singleDay: response.data,
      });
      console.log("singleDay ====== ", this.state.singleDay);
    });
  };

  componentDidMount() {
    this.getSingleDay();
  }


  render() {

    return (
      <div className="global-botton-margin">
        {
          this.state.singleDay 
        ? ( 
          <div>
          {this.state.singleDay.map((filteredExercise,i) => (
            <div>
             <h3>{filteredExercise.type}</h3>
              <Link to={"/exercise/" + filteredExercise._id +"?index=" +i + "&&?day="+ this.props.match.params.id }>
                <div className="day-exercise-box" key={filteredExercise._id}>
                  <div className="day-exercise-thumbnail-box">
                    <img src={filteredExercise.thumbnail} alt={filteredExercise.name} />
                  </div>
                  <div className="day-exercise-details-box">
                    <p className="day-exercise-name">
                      {filteredExercise.name}
                    </p>
                    <p className="day-exercise-repSec">
                      {filteredExercise.repSec}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))
          }



          </div>
      
        )
        :(
          'PAGE LOADING ...'

        )
        }
      </div>
    );
  }
}

export default DayDetails;