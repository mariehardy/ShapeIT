import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Button, Spinner} from 'reactstrap';
import { FacebookShareButton, FacebookIcon } from "react-share";

export class Share extends Component {
  render() {
    console.log("location", window.location);
    return (
      <div>
        <p className="h1">Congrats!</p>
        <div className="paragraph-margin">
        <p>You've completed Day {this.props.loggedInUser.currentDay -1} of your ShapeIT challenge! </p>
        <p>Share your progress on Facebook and get support from your community.</p>
        </div>
        <div>
        <FacebookShareButton
          // url={window.location.href}
          url="https://shapeitbaby.herokuapp.com"
          title="ShapeIT"
          quote={`I am proud to say that I just completed day ${this.props.loggedInUser.currentDay-1} of my ShapeIT Fitness challenge!`}
          hashtag="#shapeit"
          className="margin-top"
        >
          <FacebookIcon logoFillColor="white" size={100} round={false} borderRadius={10} />
        </FacebookShareButton>
        </div>
        <div>
        <Button as={Link} to="/plan" href="/plan" className="btn-round margin-top" color="primary">
          Back to Plan
        </Button>
        </div>
      </div>
    );
  }
}

export default Share;
