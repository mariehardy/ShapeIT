import React, { Component } from 'react'
// import axios from 'axios'
import picture7 from '../../images/picture7.jpg'
import picture6 from '../../images/picture6.jpg'
import picture5 from '../../images/picture5.jpg'
import picture2 from '../../images/picture2.jpg'



export class Donate extends Component {

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
      <div className = "container">
        <h1>Shape the future together!</h1>

        {this.state.donationID ? <div className="plg-donate" key={this.state.donationID} data-widget-id={this.state.donationID}></div> : null}

        Donate now for any cause of your choice

        {/* COVID Link {this.state.first && <div className="plg-donate" data-widget-id="M_5C04BdeZzFbPe4GHRihg"></div>} */}
        
        {/* <a href="https://hello.pledgeling.com/widgets/donate/IXmd3cAELs9Yobg7_nhAzw"> */}
        
        <h2 onClick={() => this.setDonationID("M_5C04BdeZzFbPe4GHRihg")}>Against Covid-19 Together</h2> 
        {/* </a> */}

        <img src= {picture6}></img>
        

        {/* <div class="plg-donate" data-widget-id="w7WdyTPSTifiNdBcJ4eCjA"></div> */}
        
        <h2 onClick={() => this.setDonationID("w7WdyTPSTifiNdBcJ4eCjA")}>Protect Women at Risk</h2>
        <img src= {picture7}></img>

        {/* <div class="plg-donate" data-widget-id="cN1_jPMIYgrpWjz-Yqv3dQ"></div> */}
        
        <h2 onClick={() => this.setDonationID("cN1_jPMIYgrpWjz-Yqv3dQ")}>Clean the Ocean Together</h2>
        <img src= {picture5}></img>

        {/* <div class="plg-donate" data-widget-id="IXmd3cAELs9Yobg7_nhAzw"></div> */}

        <h2 onClick={() => this.setDonationID("IXmd3cAELs9Yobg7_nhAzw")}>Help Children Around the World</h2>
        <img src= {picture2}></img>

        
        
        {/* <button onClick={this.first} > first </button>
        <button onClick={this.second} > two </button>



       {this.state.first && <div className="plg-donate" data-widget-id="M_5C04BdeZzFbPe4GHRihg"></div>}
       {this.state.secaund && <div className="plg-donate" data-widget-id="IXmd3cAELs9Yobg7_nhAzw"></div>}
       <li value = {this.state.name}/> */}
       

       
      </div>
    )
  }
}

export default Donate


