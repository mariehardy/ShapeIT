import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import ReactPlayer from "react-player";

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
      index: getParameterByName("index") *1,
      todaysExercises: [],
      id: "",
    };
  }

  getSingleDay = () => {
    // console.log("this.props.match of DayDetails is ==== " + this.props.match);
    // singleDay()
    axios.get("/api/day/" + this.state.day).then((response) => {
      // console.log("response from singleDay is ==== " + response.data);
      this.setState({
        todaysExercises: response.data,
      });
      // console.log("singleDay ====== ", this.state.singleDay);
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
        // console.log("singleExercise ====== ", this.state.singleExercise);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getNextExercise = () => {
    // console.log("exercise this.props.match.params.id ====== ", this.props.match.params.id);
    // axios.get("/api/exercise/" + this.props.match.params.id)
    // .then((response) =>{
    //   this.setState({
    //     singleExercise: response.data
    //   });
    //   console.log("singleExercise ====== ", this.state.singleExercise);
    // })
    // .catch((err)=>{
    //     console.log(err)
    // })
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

    //write a condition so index is not the last item
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
                // console.log("singleExercise ====== ", this.state.singleExercise);
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

    //write a condition so index is not the last item
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
                // console.log("singleExercise ====== ", this.state.singleExercise);
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
      <div>
        {this.state.singleExercise ? (
          <div className="exercise-box" key={this.state.singleExercise._id}>
            <div className="day-exercise-thumbnail-box">
              {/* <VideoPlayer youtubeId="HrDQRFfRMV4" /> */}
              <ReactPlayer url={this.state.singleExercise.videoUrl} />
            </div>
            <div className="exercise-details-box">
              <p className="exercise-name">{this.state.singleExercise.name}</p>
              <p className="exercise-description">
                {this.state.singleExercise.description}
              </p>
            </div>
            {/* <button onClick={this.clickHandler}> */}
            <Link to={{ pathname: "/share" }} onClick={this.clickHandler}>
              COMPLETE
            </Link>
            {/* <Redirect to={{pathname: '/share'}}> */}
            {/* COMPLETE */}
            {/* </Redirect> */}
            {/* </button> */}
            <button onClick={this.getPreviousExercise}>Previous Exercise</button>
            <button onClick={this.getNextExercise}>Next Exercise</button>
          </div>
        ) : (
          "LOADING..."
        )}
      </div>
    );
  }
}

export default ExerciseDetails;
