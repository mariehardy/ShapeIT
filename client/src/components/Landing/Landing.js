import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Container
} from "reactstrap";



function Landing() {
  return (

    //WORKING version with vimeo
    <div>

      <div style={{ "height": "50vh" }}></div>

      <div className="description">
        <h1 className="text-white">Social Fitness Platform</h1>
        <div>
          <h4 className="text-white">
            Build healthy habits with FUN and make a real IMPACT
            </h4>
        </div>
        <br />

        <div className="button-positioning">

          <Button as={Link} href="/signup" to="/signup" className="btn-round" color="primary" size="lg">Shape Now!</Button>

        </div>
        <br />


        <a href='#info_page'>
          <div className="btn-move-down btn-round">
            <div className="info">
              <div className="icon icon-primary">
                <i className="nc-icon nc-minimal-down" />
              </div>
            </div>
          </div>
        </a>


        <div>

          <div className="vimeo-wrapper">
            <iframe src="https://player.vimeo.com/video/441006850?background=1&autoplay=1&loop=0&byline=0&title=0" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen title="ShapeItVideo"></iframe>
          </div>

        </div>

      </div>
      <div id="info_page" style={{ "height": "30vh" }}></div>
      <h1 className ="text-white text-middle">Benefits</h1>

      <Container >
        <Row>
          <Col xs={12} md={4}>
            <div className="card-big-shadow">
              <Card
                className="card-just-text"
                data-color="purple"
                data-radius="none"
              >
                <CardBody>
                  <h6 className="card-category">Exercise</h6>
                  <CardTitle tag="h4">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      30 Days Fitness Plan
              </a>
                  </CardTitle>
                  <div className="card-description">
                    <div align="left">
                      <li>Work out at home, in the park, wherever you want</li>
                      <li>Spend 20-40 minutes only for a complete workout</li>
                      <li>Set your fitness level and goals</li>
                    </div>
                  </div>
                </CardBody>
              </Card>
              {/* end card */}
            </div>

          </Col>

          <Col xs={12} md={4} >

            <div className="card-big-shadow">
              <Card
                className="card-just-text"
                data-background="color"
                data-color="purple"
                data-radius="none"
              >
                <CardBody>
                  <h6 className="card-category">Eat Right</h6>
                  <CardTitle tag="h4">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Great Nutrition Insights
              </a>
                  </CardTitle>
                  <div className="card-description">
                    <div align="left">

                      <li>Eat clean and reach your goals</li>
                      <li>Get insights into nutrition basics</li>
                      <li>Learn the best tips on how to eat smart and sustain your energy throughout the day</li>
                    </div>
                  </div>
                </CardBody>
              </Card>
              {/* end card */}
            </div>
          </Col>


          <Col xs={12} md={4} >

            <div className="card-big-shadow">
              <Card
                className="card-just-text"
                data-background="color"
                data-color="purple"
                data-radius="none"
              >
                <CardBody>
                  <h6 className="card-category">Donate</h6>
                  <CardTitle tag="h4">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Donate and Share
              </a>
                  </CardTitle>
                  <div className="card-description">
                    <div align="left">

                      <li>Pledge to a non-profit of your choice, connect with like-minded Shapers</li>
                      <li>Make this world a better place for everyone</li>
                      <li>(Coming Soon) Collect ShapeCoins and sponsor your donations</li>
                    </div>
                  </div>
                </CardBody>
              </Card>
              {/* end card */}
            </div>
          </Col>

        </Row>

      </Container>

      <h1 className ="text-white text-middle">Shapers' Testimonials</h1>
      <Carousel />
      <br />

      <div className="button-positioning">

        <Button as={Link} href="/signup" to="/signup" className="btn-round" color="primary" size="lg">Shape Now!</Button>

      </div>
      <br />

    </div>
  )
}



export default Landing
