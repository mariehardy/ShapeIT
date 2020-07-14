import React, { Component } from 'react'
import {FacebookShareButton, FacebookIcon} from 'react-share'

export class ExerciseShare extends Component {
  render() {
    console.log("location",window.location)
    return (
      <div>
        <h1>Share your results</h1>
        <p>
          You completed this day's training! Take a picture and share it on Instagram.
        </p>
        <button>SHARE</button>

        <FacebookShareButton
    url={window.location.href}
    // quote={props.joke.setup + props.joke.punchline}
    // hashtag="#programing joke"
    >
    <FacebookIcon logoFillColor="white" />
</FacebookShareButton>

      </div>
    )
  }
}

export default ExerciseShare