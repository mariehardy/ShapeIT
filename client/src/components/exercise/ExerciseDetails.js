import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'


class ExerciseDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      singleExercise: null,
    };
  }

  getSingleExercise = () => {
    console.log("exercise this.props.match.params.id ====== ", this.props.match.params.id);

    axios.get("/api/exercise/" + this.props.match.params.id)

    .then((response) =>{
      this.setState({
        singleExercise: response.data
      });
      console.log("singleExercise ====== ", this.state.singleExercise);
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  componentDidMount(){
    this.getSingleExercise();
  }

  

  render(){
    return(
      <div>

        {/* TO DO:::NAVIGATION BETWEEN PREVIOUS AND NEXT EXERCISE!!!! */}

        {
          this.state.singleExercise
          ? (
              <div className="exercise-box" key={this.state.singleExercise._id}>
                <div className="day-exercise-thumbnail-box">
                  {/* <VideoPlayer youtubeId="HrDQRFfRMV4" /> */}
                  <ReactPlayer url={this.state.singleExercise.videoUrl} />
                </div>
                <div className="exercise-details-box">
                  <p className="exercise-name">
                    {this.state.singleExercise.name}
                  </p>
                  <p className="exercise-description">
                    {this.state.singleExercise.description}
                  </p>
                </div>
              </div>
          )
          : (
          "LOADING..."
          )
        }
      </div>
    )
  }
}

export default ExerciseDetails;