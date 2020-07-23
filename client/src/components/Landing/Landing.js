import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Spinner, Container, Row, Col } from 'reactstrap'


function Landing() {
  return (

    //WORKING version with vimeo
    <div>
      <div className="button-positioning">

        <Button as={Link} href="/signup" to="/signup" className="btn-round" color="primary" size="lg">Shape Now!</Button>

      </div>

      <div>

        <div className="vimeo-wrapper">
          <iframe src="https://player.vimeo.com/video/441006850?background=1&autoplay=1&loop=0&byline=0&title=0" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
        </div>





        {/* Partially working version with youtube */}

        {/* <div className="video-background">
        <div className="video-foreground">
          <iframe width="862" height="485" src="https://www.youtube.com/embed/5iWtLt9v_CI?autoplay=1 " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>

      <div id="vidtop-content">
        <div className="vid-info">
          <h1>YouTube Fullscreen Background Demo</h1>
          <p>The International Space Station orbits the Earth every 92 minutes, with its crew seeing a sunrise 15 times a day. It exists as a scientific, educational, and engineering platform in low orbit, 330 to 435 kilometres above the Earth.</p>
     <p>Original timelapse by Riccardo Rossi (ISAA), used under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. Raw photos courtesy of http://eol.jsc.nasa.gov/ </p>
	 <a href="/500/Use-YouTube-Videos-as-Fullscreen-Web-Page-Backgrounds">Full article</a>
  </div>
</div> */}
      </div>
    </div>
  )
}

// Attempt with the player from W3Scode
{/* HERE IS THE LANDING FOR UNAUTHORISED USERS WITH A VIDEO BACKGROUND
      <video autoplay muted loop id="myVideo">
        <source src={video} type="video/mp4"/>
</video>


        <div classNameName="content">
          <h1>Heading</h1>
          <p>Lorem ipsum...</p>

          <button id="myBtn" onclick="myFunction()">Pause</button>
        </div> */}

{/* <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    /> */}



export default Landing
