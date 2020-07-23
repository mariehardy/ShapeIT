import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import picture7 from '../../images/picture7.jpg'
import picture6 from '../../images/picture6.jpg'
import picture5 from '../../images/picture5.jpg'
import picture2 from '../../images/picture2.jpg'
import picture1 from '../../images/picture1.jpg'
import donate_main2 from '../../assets/img/shapeIT/donate_main2.jpg'
import image1 from '../../assets/img/shapeIT/nutrition_main_first.jpg'


import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardTitle,
  CardSubtitle,
  CardText,
  ListGroupItem,
  ListGroup
} from "reactstrap";



export class Donate extends Component {

  
  render() {

    return (
      <div>

        <h1>Donate</h1>
        <Card>
          <CardImg
            alt="..."
            src={donate_main2}
          ></CardImg>
          <CardImgOverlay>
          <CardTitle className="text-right" tag="h4">Shape the future Together</CardTitle>
          <CardText className="text-right">
          <h6>When you exercise for charity, you know what’s really important to you</h6>
          </CardText>
          </CardImgOverlay>

          </Card>

        <p>Shape the future together!</p>
   
        <Link to="/donate-myself"> <Card className="text-white text-right">
          <CardImg
            alt="..."
            src={picture1}
          ></CardImg>
          <CardImgOverlay>
            <CardTitle className="text-white text-middle" tag="h1">Pledge Yourself</CardTitle>
            <CardText className="text-white text-middle">
              Make a positive change by donating just a little for a good cause of your choice. Make this world a better place for everyone
          </CardText>
          </CardImgOverlay>
        </Card>
        </Link>

        <Card className="text-white text-middle">
          <CardImg
            alt="..."
            src={picture2}
          ></CardImg>
          <CardImgOverlay>
            <CardTitle className="text-white text-middle" tag="h1">Donate ShapeCoins</CardTitle>
            <CardText className="text-white text-middle">
              Get sponsored by Companies and donate your ShapeCoins from exercises for a good cause
          </CardText>
          </CardImgOverlay>
        </Card>
       


      </div>
    )
  }
}

export default Donate


