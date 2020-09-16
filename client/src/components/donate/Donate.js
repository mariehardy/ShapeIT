import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import picture2 from '../../images/picture2.jpg'
import picture1 from '../../images/picture1.jpg'
import donate_main2 from '../../assets/img/shapeIT/donate_main2.jpg'

import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText
} from "reactstrap";


class Donate extends Component {

  state = {
    donationID: ""
  }

  // componentDidMount() {
    
  //   axios.get('/api/donation')
  //   .then((res) => {
  //     console.log("This is SOMETHING:", res.data)
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //   })
    
  //   fetch('https://api.pledgeling.com/v1/organizations')
  //   .then(res => res.json())
  //   .then((data) => {
  //     this.setState({ name: data })
  //   })
  //   .catch(console.log)
  // }

    setDonationID = (theID) =>{
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

      <div>

        <h1>Donate</h1>

        <Card>
          <CardImg
            alt="..."
            src={donate_main2}
          ></CardImg>
          <CardImgOverlay>
          <CardTitle className="text-right text-white" tag="h4">Shape the future Together</CardTitle>
          <CardText className="text-right text-white" tag="h6">
          When you exercise for charity, you know what’s really important to you
          </CardText>
          </CardImgOverlay>
          </Card>

        
   
        <Link to="/donate-myself"> <Card className="text-white text-middle">
          <CardImg
            alt="..."
            src={picture1}
          ></CardImg>
          <CardBody>
          <CardImgOverlay>
            <CardTitle className="text-white text-middle" tag="h2">Pledge Yourself</CardTitle>
          </CardImgOverlay>
          <CardText className="text-black text-middle">
              Make a positive change by donating just a little for a good cause of your choice. Make this world a better place for everyone
          </CardText>
          </CardBody>
        </Card>
        </Link>



        <Card className="text-white text-middle">
          <CardImg
            alt="..."
            src={picture2}
          ></CardImg>
          <CardBody>
          <CardImgOverlay>
            <CardTitle className="text-white text-middle" tag="h2">Donate ShapeCoins</CardTitle>
          </CardImgOverlay>
          <CardText className="text-black text-middle">
              Get sponsored by companies and donate your ShapeCoins from exercises for a good cause
          </CardText>
          </CardBody>
        </Card>
       


       {this.state.first && <div className="plg-donate" data-widget-id="M_5C04BdeZzFbPe4GHRihg"></div>}
       {this.state.secaund && <div className="plg-donate" data-widget-id="IXmd3cAELs9Yobg7_nhAzw"></div>}
       <li value = {this.state.name}/> 
       

       
      </div>
    )
  }
}

export default Donate


