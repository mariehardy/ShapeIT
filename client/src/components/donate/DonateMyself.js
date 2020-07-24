import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import picture7 from '../../images/picture7.jpg'
import picture6 from '../../images/picture6.jpg'
import picture5 from '../../images/picture5.jpg'
import picture1 from '../../images/picture1.jpg'
import donate_main from '../../assets/img/shapeIT/donate_main.jpg'
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


export class DonateMyself extends Component {

  state = {
    donationID: ""
  }


  setDonationID = (theID) => {
    this.setState({
      donationID: theID
    })
  }

  // first = () =>{
  //   this.setState({
  //     first: !this.state.first
  //   })
  // }
  // second = ()=>{
  //   this.setState({
  //     secaund: !this.state.secaund
  //   })
  // }
  render() {

    return (
      <div >
    
   
        <h1 id="donation" >Donate</h1>
        <h4 >Let's shape the future together!</h4>

        {this.state.donationID ? <div className="plg-donate" key={this.state.donationID} data-widget-id={this.state.donationID}></div> : null}

        Donate now to the cause of your choice
        <br/>

        {/* COVID Link {this.state.first && <div className="plg-donate" data-widget-id="M_5C04BdeZzFbPe4GHRihg"></div>} */}

        {/* <a href="https://hello.pledgeling.com/widgets/donate/IXmd3cAELs9Yobg7_nhAzw"> */}
        <div className='margin-top'><a href='#donation'>
        <Link onClick={() => this.setDonationID("M_5C04BdeZzFbPe4GHRihg")} >
          <Card className="text-white text-middle">
         
            <CardImg
              alt="..."
              src={picture6}
            ></CardImg>
            <CardImgOverlay>
            <CardBody>
              <CardTitle className="text-white text-middle" tag="h1">Shape Health</CardTitle>
              </CardBody>
            </CardImgOverlay>
          </Card>
        </Link>
        </a>
        </div>

        <div> 
        <a href='#donation'>
        <Link onClick={() => this.setDonationID("w7WdyTPSTifiNdBcJ4eCjA")} >
        
          <Card className="text-white text-middle">
            <CardImg
              alt="..."
              src={picture7}
            ></CardImg>
            <CardImgOverlay>
              <CardTitle className="text-white text-middle" tag="h1">Shape Society</CardTitle>
            </CardImgOverlay>
          </Card>
        </Link>
        </a>
        </div>

        <div> 
        <a href='#donation'>
        <Link onClick={() => this.setDonationID("cN1_jPMIYgrpWjz-Yqv3dQ")} >
          <Card className="text-white text-middle">
            <CardImg
              alt="..."
              src={picture5}
            ></CardImg>
            <CardImgOverlay>
            <CardBody>
              <CardTitle className="text-white text-middle" tag="h1">Shape Nature</CardTitle>
              </CardBody>
            </CardImgOverlay>
          </Card>
        </Link>
        </a>
        </div>

        <div> 
        <a href='#donation'>
        <Link onClick={() => this.setDonationID("IXmd3cAELs9Yobg7_nhAzw")} >
          <Card className="text-white text-middle">
            <CardImg
              alt="..."
              src={picture1}
            ></CardImg>
            <CardImgOverlay>
              <CardTitle className="text-white text-middle" tag="h1">Inequality</CardTitle>
            </CardImgOverlay>
          </Card>
        </Link>
        </a>
        </div>



      </div>
    )
  }
}

export default DonateMyself


