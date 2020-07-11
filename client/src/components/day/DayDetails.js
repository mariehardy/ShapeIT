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
      // console.log("singleDay ====== ", this.state.singleDay);
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
          ? 
           this.state.singleDay.map((el,i) => {
             return(
            el.type=='Cardio'
            ? (
              <div>
              <h3>CARDIO</h3>
              <Link to={"/exercise/" + el._id +"?index=" +i + "&&?day="+ this.props.match.params.id }>
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
              </div>
            )
            : (
          'NO CARDIO'
          )
          )
           })
        
        : (
          'PAGE LOADING ...'
          )
        }
      </div>
    );
  }
}

export default DayDetails;