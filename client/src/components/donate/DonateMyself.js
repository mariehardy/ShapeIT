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
    
   
        <h1>Donate</h1>
        <h4>Shape the future together!</h4>

        {this.state.donationID ? <div className="plg-donate" key={this.state.donationID} data-widget-id={this.state.donationID}></div> : null}

        Donate now for any cause of your choice

        {/* COVID Link {this.state.first && <div className="plg-donate" data-widget-id="M_5C04BdeZzFbPe4GHRihg"></div>} */}

        {/* <a href="https://hello.pledgeling.com/widgets/donate/IXmd3cAELs9Yobg7_nhAzw"> */}

        <Link onClick={() => this.setDonationID("M_5C04BdeZzFbPe4GHRihg")} >
          <Card className="text-white text-middle">
            <CardImg
              alt="..."
              src={picture6}
            ></CardImg>
            <CardImgOverlay>
              <CardTitle className="text-white text-middle" tag="h1">Shape Health</CardTitle>
            </CardImgOverlay>
          </Card>
        </Link>

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

        <Link onClick={() => this.setDonationID("cN1_jPMIYgrpWjz-Yqv3dQ")} >
          <Card className="text-white text-middle">
            <CardImg
              alt="..."
              src={picture5}
            ></CardImg>
            <CardImgOverlay>
              <CardTitle className="text-white text-middle" tag="h1">Shape Environment</CardTitle>
            </CardImgOverlay>
          </Card>
        </Link>

        <Link onClick={() => this.setDonationID("IXmd3cAELs9Yobg7_nhAzw")} >
          <Card className="text-white text-middle">
            <CardImg
              alt="..."
              src={picture1}
            ></CardImg>
            <CardImgOverlay>
              <CardTitle className="text-white text-middle" tag="h1">Shape Inequality</CardTitle>
            </CardImgOverlay>
          </Card>
        </Link>

        {/* <h2 onClick={() => this.setDonationID("M_5C04BdeZzFbPe4GHRihg")}>Against Covid-19 Together</h2>
        {/* </a> */}

        {/* <img src={picture6}></img> */}


        {/* <div class="plg-donate" data-widget-id="w7WdyTPSTifiNdBcJ4eCjA"></div> */}

        {/* <h2 onClick={() => this.setDonationID("w7WdyTPSTifiNdBcJ4eCjA")}>Protect Women at Risk</h2>
        <img src={picture7}></img> */}

        {/* <div class="plg-donate" data-widget-id="cN1_jPMIYgrpWjz-Yqv3dQ"></div> */}

        {/* <h2 onClick={() => this.setDonationID("cN1_jPMIYgrpWjz-Yqv3dQ")}>Clean the Ocean Together</h2>
        <img src={picture5}></img>

        <div class="plg-donate" data-widget-id="IXmd3cAELs9Yobg7_nhAzw"></div> */}

        {/* <h2 onClick={() => this.setDonationID("IXmd3cAELs9Yobg7_nhAzw")}>Help Children Around the World</h2>
        <img src={picture2}></img>



        {/* <button onClick={this.first} > first </button>
        <button onClick={this.second} > two </button>



       {this.state.first && <div className="plg-donate" data-widget-id="M_5C04BdeZzFbPe4GHRihg"></div>}
       {this.state.secaund && <div className="plg-donate" data-widget-id="IXmd3cAELs9Yobg7_nhAzw"></div>}
       <li value = {this.state.name}/> */}



      </div>
    )
  }
}

export default DonateMyself


