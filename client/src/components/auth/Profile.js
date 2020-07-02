import React, { Component } from 'react';
import { login } from '../../services/api.js'
import { Link } from 'react-router-dom';
import axios from 'axios'

class Profile extends React.Component {

  state = {

  }

  render() {
    return (
      <div>
        <h1>Hello from Profile Page!</h1>
        <p>My name is: {JSON.stringify(this.props.loggedInUser)}</p>
        <p>Avatar goes HERE</p>
        <p>Email: {this.props.loggedInUser.email}</p>
        <p>Name: {this.props.loggedInUser.firstName}</p>
        <p>Surname: {this.props.loggedInUser.lastName}</p>
        <p>Birthday: {this.props.loggedInUser.birthday}</p>
        <p>Country: {this.props.loggedInUser.country}</p>
        <p>City: {this.props.loggedInUser.city}</p>
        <p>Weight: {this.props.loggedInUser.weight}</p>
        <p>Height: {this.props.loggedInUser.height}</p>
        <p>Current Day: {this.props.loggedInUser.currentDay}</p>
      </div>
    )
  }

}


// class Profile extends Component {
//   constructor(props){
//       super(props);
//       this.state = {};
//   }

//   componentDidMount(){
//       this.getSingleProfile();
//   }

//   getSingleProfile = () => {
//       const { params } = this.props.match;
//       axios.get(`/api/profile/${params.id}`)
//       .then( responseFromApi =>{
//           const theProfile = responseFromApi.data;
//           this.setState(theProfile);
//       })
//       .catch((err)=>{
//           console.log(err)
//       })
//   }

//   render(){
//     return(
//       <div>
//         <h1> PROFILE - I AM HERE</h1>
//         <h1>{this.state.firstName}</h1>
//         <p>{this.state.lastName}</p>
//         <Link to={'/'}>Back to the main page</Link>
//       </div>
//     )
//   }
// }

export default Profile;