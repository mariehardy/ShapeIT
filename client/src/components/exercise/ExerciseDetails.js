import React, { Component } from 'react';
import axios from 'axios';


class ExerciseDetails extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.getTheTask();
  }

  getTheTask = () => {
    const { params } = this.props.match;
    axios.get(`/api/exercises/${params.exerciseId}`)
    .then( responseFromApi =>{
      const theExercise = responseFromApi.data;
      this.setState(theExercise);
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.type}</p>
      </div>
    )
  }
}

export default ExerciseDetails;