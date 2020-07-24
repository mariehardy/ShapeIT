import React from 'react';
import { Link } from 'react-router-dom';
import profilepic from '../../assets/img/placeholder.jpg'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
} from "reactstrap"

class Profile extends React.Component {

  state = {

  }

  render() {
    return (

      // --- Second option ---
      <div>
      <Card
        data-background="image"
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/shapeIT/IMG_7691.JPG") + ")"
        }}
      >
        
        {/* <Card className="card-profile">
        <div className="card-avatar border-white">
          <a href="#pablo" onClick={e => e.preventDefault()}>
           <img
              alt="..."
              src={this.props.loggedInUser.avatarUrl} alt={this.props.loggedInUser.email}
            ></img>
          </a>
        </div></Card> */}

        <CardBody>
        <blockquote className="blockquote">
        <div className="mb-0">
  
          <CardTitle tag="h4">Hello {this.props.loggedInUser.firstName}!</CardTitle>
          <br/>
          <h6 className="card-category">Shape your will NOW</h6>
          <br/>
    
          </div>  
      </blockquote>
          
          <div className="card-avatar border-white">
          {/* <object className = "image--cover" data={this.props.loggedInUser.avatarUrl} type="image/png"> */}
          <img
              alt="Profile Picture"
              src={this.props.loggedInUser.avatarUrl? this.props.loggedInUser.avatarUrl : profilepic} 
              // alt={this.props.loggedInUser.email}
            ></img>
            
            {/* this.props.loggedInUser.avatarUrl? this.props.loggedInUser.avatarUrlv:profilepic
            if (this.props.loggedInUser.avatarUrl){
              this.props.loggedInUser
            } else {
              Avatar*/}
        
            {/* </object> */}
          </div>
          <p className="card-description">
            Unlike fashionable design, it lasts many years – even in today’s
            throwaway society.
          </p>
          <CardFooter>
            <Button
              className="btn-round card-link"
              color="primary"
              onClick={e => e.preventDefault()}
            >

              <CardBody>
                
                <div className="card-description">
                  Hey there! Welcome to your user card. As you can see, it is
                  already looking great.
                  
                  <div >
                  <br/>
                    {/* <p>My name is: {JSON.stringify(this.props.loggedInUser)}</p> */}
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
                </div>
                <br/>
                <Link to={'/profile-edit'}><Button className="btn-round" color="default">Edit Profile</Button></Link>
              </CardBody>


            </Button>
          </CardFooter>
        </CardBody>
      </Card>
      </div>
      // <Card className="card-profile">
      
      //   <div
      //     className="card-cover"
      //     style={{
      //       backgroundImage:
      //         "url(" +
      //         require("../../assets/img/antoine-barres.jpg") +
      //         ")"
      //     }}
      //   ></div>
      //   <div className="card-avatar border-white">
      //     <a href="#pablo" onClick={e => e.preventDefault()}>
      //       <img
      //         alt="..."
      //         src={this.props.loggedInUser.avatarUrl} alt={this.props.loggedInUser.email}
      //       ></img>
      //     </a>
      //   </div>

      // {/* <div className="global-botton-margin">
      //   <h1>Hello {this.props.loggedInUser.firstName}!</h1>
      //   <div className="container">
      //     <p><img src={this.props.loggedInUser.avatarUrl} alt={this.props.loggedInUser.email} /></p>
      //   </div> */}


      // {/* </div> */}
      // </Card>
    )
  }

}


export default Profile;