import React, { Component } from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";

export class Share extends Component {
  render() {
    console.log("location", window.location);
    return (
      <div>
        <h1>Congrats!</h1>
        <p>You've completed Day {this.props.loggedInUser.currentDay -1} of your ShapeIT challenge! </p>
        <p>Share your progress on Facebook and get support from your community.</p>
        
        <FacebookShareButton
          // url={window.location.href}
          url={this.props.loggedInUser.avatarUrl}
          title="ShapeIT Baby!"
          quote={`I am proud to say that I just completed day ${this.props.loggedInUser.currentDay-1} of my ShapeIT Fitness challenge!`}
          hashtag="#shapeitbaby"
        >
          <FacebookIcon logoFillColor="white" size={100} round={false} borderRadius={10} />
        </FacebookShareButton>
      </div>
    );
  }
}

export default Share;
