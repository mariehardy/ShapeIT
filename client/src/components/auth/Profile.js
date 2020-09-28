import React from 'react';
import { Link } from 'react-router-dom';
import profilepic from '../../assets/img/placeholder.jpg';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container, Row, Col
} from "reactstrap";
import moment from 'moment';


class Profile extends React.Component {

  state = {

  }


  render() {

    // let birthdayDate = this.props.loggedInUser.birthday
    // console.log('typeof(birthdayDate) ====', typeof(birthdayDate))

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
              alt="Your Avatar"
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
          
          <CardFooter>
            {/* <Button
              className="btn-round card-link"
              color="primary"
              onClick={e => e.preventDefault()}
            > */}

              <CardBody>
                
                <div className="card-description">
                  
                  <div>
                  <Container>
                    <Row className="row align-items-start">
                    <Col className="text-left">
                    {/* <p>My name is: {JSON.stringify(this.props.loggedInUser)}</p> */}
                    <h5><strong>Email:</strong> {this.props.loggedInUser.email}</h5>
                    <hr />
                    <h5><strong>First Name:</strong> {this.props.loggedInUser.firstName}</h5>
                    <hr />
                    <h5><strong>Surname:</strong> {this.props.loggedInUser.lastName}</h5>
                    <hr />
                    {!this.props.loggedInUser.birthday ? null : <h5><strong>Birthday: </strong> {moment(this.props.loggedInUser.birthday).format('DD/MM/YYYY')}<hr /> </h5>  } 
                    {!this.props.loggedInUser.country ? null : <h5><strong>Country:</strong> {this.props.loggedInUser.country} <hr /> </h5> }
                    {!this.props.loggedInUser.city ? null : <h5><strong>City:</strong> {this.props.loggedInUser.city} <hr /> </h5> }
                    {!this.props.loggedInUser.weight ? null : <h5><strong>Weight:</strong> {this.props.loggedInUser.weight} <hr /></h5> }
                    {!this.props.loggedInUser.height ? null : <h5><strong>Height:</strong> {this.props.loggedInUser.height} <hr /> </h5> }
                    <h5><strong>Current Day:</strong> {this.props.loggedInUser.currentDay}</h5>
                    </Col>
                    </Row>
                  </Container>
                  </div>
                </div>
                <br/>
                <Link to={'/profile-edit'}><Button className="btn-round" color="primary">Edit Profile</Button></Link>
              </CardBody>


            {/* </Button> */}
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