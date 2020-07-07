import React, { Component } from 'react'
// import axios from 'axios'
// import picture1 from '../../images/picture1.jpg'



export class Donate extends Component {

  state = {
    first:false,
    second:false
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

  first = () =>{
    this.setState({
      first: !this.state.first
    })
  }
  second = ()=>{
    this.setState({
      secaund: !this.state.secaund
    })
  }
  render() {
    
    return (
      <div>
        DONATE!
        {/* <img src= {picture1}></img> */}
        <button onClick={this.first} > first </button>
        <button onClick={this.second} > two </button>


       {this.state.first && <div className="plg-donate" data-widget-id="Tn64CmlbipnSi4xoFLBxcA"></div>}
       {this.state.secaund && <div className="plg-donate" data-widget-id="IXmd3cAELs9Yobg7_nhAzw"></div>}
       <li value = {this.state.name}/>
      </div>
    )
  }
}

export default Donate


