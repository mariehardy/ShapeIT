import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Button, Spinner} from 'reactstrap';
import { FacebookShareButton, FacebookIcon } from "react-share";

export class Share extends Component {
  render() {
    console.log("location", window.location);
    return (
      <div>
        <h1>Congrats!</h1>
        <div className="paragraph-top-margin">
        <p>You've completed Day {this.props.loggedInUser.currentDay -1} of your ShapeIT challenge! </p>
        <p>Share your progress on Facebook and get support from your community.</p>
        </div>
        <div>
        <FacebookShareButton
          // url={window.location.href}
          url="https://shapeit.kerokuapp.com"
          title="ShapeIT!"
          quote={`I am proud to say that I just completed day ${this.props.loggedInUser.currentDay-1} of my ShapeIT Fitness challenge!`}
          hashtag="#shapeit"
          className="button-margin"
        >
          <FacebookIcon logoFillColor="white" size={100} round={false} borderRadius={10} />
        </FacebookShareButton>
        </div>
        <div>
        <Button as={Link} to="/plan" href="/plan" className="btn-round" color="primary" className="button-margin">
          Back to Plan
        </Button>
        </div>
      </div>
    );
  }
}

export default Share;
