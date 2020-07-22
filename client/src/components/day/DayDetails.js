import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Spinner} from 'reactstrap';

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
      <div>
        {
          this.state.singleDay 
        ? ( 
          <div>
          <p className="h1">Day {this.props.match.params.id}</p>
          {this.state.singleDay.map((filteredExercise,i) => (
            <div className="day-exercise-card margin-top">
            <Link to={"/exercise/" + filteredExercise._id +"?index=" +i + "&&?day="+ this.props.match.params.id }>

             <p className="h3">{filteredExercise.name}</p>
                <div className="day-exercise-box" key={filteredExercise._id}>
                  <div className="day-exercise-thumbnail-box margin-top-bottom">
                    <img src={filteredExercise.thumbnail} alt={filteredExercise.name} />
                  </div>
                  <div className="day-exercise-details-box">
                    <p className="day-exercise-name">
                      {filteredExercise.type}
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
          <Spinner color="warning" />
        )
        }
      </div>
    );
  }
}

export default DayDetails;