import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";


// JUST AN EXPERIMENT WITH SEEDS.JS 
// IF NOT WORKING, DELETE, and UNCOMMENT ALL THAT IS COMMENTED OUT BELOW
const DayDetails = (props) => {

console.log('props are ===== ' + props.match);

//state passed from Plan with list of all days
let listOfDays = props.state.listOfdays

let dayDetails = listOfDays.find((el) => el.videoUrl === props.match.params.id)
console.log('dayDetails is === ' + dayDetails)

  return (
    <div>
      props name; {props.name}
      Name of dayDetails: {dayDetails.name}
    </div>
  );
}






// class DayDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {
//     this.getSingleDay();
//   }

//   getSingleDay = () => {
//     const { params } = this.props.match;
//     axios
//       .get(`/api/day/${params.id}`)
//       .then((responseFromApi) => {
//         const theDay = responseFromApi.data;
//         this.setState(theDay);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   // renderEditForm = () => {
//   //   if (!this.state.title) {
//   //     this.getSingleProject();
//   //   } else {
//   //     return (
//   //       <EditProject
//   //         theDay={this.state}
//   //         getTheDay={this.getSingleDay}
//   //         {...this.props}    // {...props} => so we can have 'this.props.history' in Edit.js
//   //       />
//   //     ); 
//   //   }
//   // };

//   // DELETE PROJECT:
//   // deleteProject = () => {
//   //   const { params } = this.props.match;
//   //   axios.delete(`/api/projects/${params.id}`)
//   //   .then( () =>{
//   //       this.props.history.push('/projects'); // !!!         
//   //   })
//   //   .catch((err)=>{
//   //       console.log(err)
//   //   })
//   // }

//   // renderAddTaskForm = () => {
//   //   if(!this.state.title){
//   //       this.getSingleDay();
//   //     } else {     
//   //               // pass the project and method getSingleProject() as a props down to AddTask component
//   //       return <AddTask theDay={this.state} getTheProject={this.getSingleDay} />
//   //     }
//   // }

//   // ownershipCheck = (day) => {
//   //   if(this.props.loggedInUser && project.owner == this.props.loggedInUser._id){
//   //     return (
//   //       <div>
//   //         <div>{this.renderEditForm()} </div>
//   //         <button onClick={() => this.deleteDay(this.state._id)}>Delete day</button>
//   //       </div>
//   //     )
//   //   } 
//   // }
  
//   render(){
//     return(
//       <div>
//         <h1>{this.state.name}</h1>
//         <p>{this.state.exercises}</p> {/* iterate through exercises array */}
//         <Link to={'/plan'}>Back to Plan</Link>
//       </div>
//     )
//   }
  
  
  
//   // render(){
//   //   return(
//   //     <div>
//   //       <h1>{this.state.title}</h1>
//   //       <p>{this.state.description}</p>
//   //       {/* show the task heading only if there are tasks */}
//   //       { this.state.tasks && this.state.tasks.length > 0 && <h3>Tasks </h3> }
//   //       {/* map through the array of tasks and... */}
//   //       { this.state.tasks && this.state.tasks.map((task, index) => {
//   //           return(
//   //               <div key={ index }>
//   //               {/* ... make each task's title a link that goes to the task details page */}
//   //                   <Link to={`/tasks/${task._id}`}>
//   //                       { task.title }
//   //                   </Link>
//   //               </div>
//   //           )

//   //       }) }
//   //       <div>{this.renderEditForm()} </div>
//   //       <button onClick={() => this.deleteProject()}>Delete project</button>
//   //       <br/>
//   //       <div>{this.renderAddTaskForm()} </div>
//   //       <br/><br/><br/><br/><br/>
//   //       <Link to={'/projects'}>Back to projects</Link>
//   //     </div>
//   //   )
//   // }
// }

export default DayDetails;