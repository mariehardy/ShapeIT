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

    //let cardioExercisesFilter = this.state.singleDay.filter((el) => el.type.includes('Cardio'))



    return (
      <div>
        {
          this.state.singleDay 
        ? ( 
          <div>
          <h3>WARM-UP</h3>
          {this.state.singleDay.filter((el) => el.type.includes('Warm-up')).map((filteredExercise,i) => (
            <div>
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


          <h3>CARDIO</h3>
          {this.state.singleDay.filter((el) => el.type.includes('Cardio')).map((filteredExercise,i) => (
            <div>
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