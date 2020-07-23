import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import ReactPlayer from "react-player";
import {Button, Spinner, Container, Row, Col} from 'reactstrap';


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
      if (i === this.state.index - 1) {
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
      if (i === this.state.index + 1) {
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
      <div>
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
              <h3 className="exercise-name">{this.state.singleExercise.name}</h3>
              <ol className="exercise-description paragraph-margin">
                {this.state.singleExercise.description.map(el => (
                  <li className="text-left">{el}</li>
                ))}
              </ol>
            </div>


            <Container>
            <Row className="align-items-center margin-top">
            <Col xs="4">
            {this.state.index === 0
            ? (
              <Button as={Link} to={"/day/" + this.state.day} href={"/day/" + this.state.day} className="btn-round" color="primary">Back To Day</Button>
            )
            : (
              <Button onClick={this.getPreviousExercise} className="btn-round" color="primary">Previous</Button>
            )
            }
            </Col>
            <Col xs="4">
            <p>{this.state.index+1} / {this.state.todaysExercises.length}</p>
            </Col>
            <Col xs="4">
            {this.state.index !== this.state.todaysExercises.length-1
            ? (
              <Button onClick={this.getNextExercise} className="btn-round" color="primary">Next</Button>
            )
            : (
              this.state.day < this.props.loggedInUser.currentDay 
              ? (
                <Button as={Link} to="/plan" href="/plan" className="btn-round" color="primary">
                Back to Plan
                </Button>
              )
              : (
                <Button as={Link} to="/share" href="/share" onClick={this.clickHandler} className="btn-round" color="primary">
                SHARE YOUR PROGRESS
                </Button>
              )
            )
            }
            </Col>
            </Row>
          </Container>
          </div>
        ) : (
          <Spinner color="warning" />
        )}
      </div>
    );
  }
}

export default ExerciseDetails;
