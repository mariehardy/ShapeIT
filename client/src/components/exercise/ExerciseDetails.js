import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import ReactPlayer from "react-player";
import './ExerciseDetails.scss'
import {Button} from 'reactstrap';


function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

class ExerciseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleExercise: null,
      day: getParameterByName("day") * 1,
      index: getParameterByName("index") * 1,
      todaysExercises: [],
      id: "",
    };
  }

  getSingleDay = () => {
    // singleDay()
    axios.get("/api/day/" + this.state.day).then((response) => {
      this.setState({
        todaysExercises: response.data,
      });
      console.log("index ======= ", this.state.index)
      // console.log("last index of array ======= ", this.state.todaysExercises.length-1)
    });
  };

  getSingleExercise = () => {
    // console.log("exercise this.props.match.params.id ====== ", this.props.match.params.id);
    axios
      .get("/api/exercise/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          singleExercise: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  clickHandler = (event) => {
    axios
      .post("/api/increaseCurrentDay")
      .then((response) => {
        this.props.updateUser(response.data);
      })
      .catch((error) => console.log(error));
  };


  getPreviousExercise = () => {
    this.state.todaysExercises.map((e, i) => {
      if (i == this.state.index - 1) {
        this.setState(
          {
            id: e._id,
            index:this.state.index -1
          },
          () => {
            axios
              .get("/api/exercise/" + this.state.id)
              .then((response) => {
                this.setState({
                  singleExercise: response.data,
                });
              })
              .catch((err) => {
                console.log(err);
              });
          }
        );
      }
    });
  };



  getNextExercise = () => {

    this.state.todaysExercises.map((e, i) => {
      if (i == this.state.index + 1) {
        this.setState(
          {
            id: e._id,
            index:this.state.index +1
          },
          () => {
            axios
              .get("/api/exercise/" + this.state.id)
              .then((response) => {
                this.setState({
                  singleExercise: response.data,
                });
              })
              .catch((err) => {
                console.log(err);
              });
          }
        );
      }
    });
  };

  componentDidMount() {
    this.getSingleExercise();
    this.getSingleDay();
  }

  render() {
    console.log("props from exercise", this.state);
    return (
      <div className="global-botton-margin">
        {this.state.singleExercise 
        ? (
          <div className="exercise-container" key={this.state.singleExercise._id}>
            <div className="player-wrapper">
              <ReactPlayer url={this.state.singleExercise.videoUrl} 
              className='react-player'
              controls={true} 
              loop={true} 
              width='100%'
              height='100%'/>
            </div>
            <div className="exercise-details-container">
              <p className="exercise-name">{this.state.singleExercise.name}</p>
              <p className="exercise-description">
                {this.state.singleExercise.description}
              </p>
            </div>

            

            {!this.state.index == 0
            ? (
              <button onClick={this.getPreviousExercise}>Previous Exercise</button>
            )
            : (
              <Link to={{ pathname: "/day/" + this.state.day }}>Back To Day</Link>
            )
            }

            <p>{this.state.index+1} / {this.state.todaysExercises.length}</p>

            {this.state.index != this.state.todaysExercises.length-1
            ? (
              <Button onClick={this.getNextExercise} className="btn-round" color="primary">Next Exercise</Button>
            )
            : (
              this.props.loggedInUser.currentDay < 22
              ? (
                <Link to={{ pathname: "/share" }} onClick={this.clickHandler}>
                COMPLETE
                </Link>
              )
              : (
                <Link to={{ pathname: "/share" }}>
                SHARE YOUR PROGRESS
                </Link>
              )
            )
            }
          </div>
        ) : (
          "LOADING..."
        )}
      </div>
    );
  }
}

export default ExerciseDetails;
