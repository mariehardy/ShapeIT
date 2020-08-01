import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../assets/img/shapeIT/nutrition_main_first.jpg'
import image2 from '../../assets/img/shapeIT/nutrition_main_second.jpg'
import image3 from '../../assets/img/shapeIT/nutrition_main_third.jpg'
import image4 from '../../assets/img/shapeIT/lifestyle.jpg'
// reactstrap components
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText
} from "reactstrap";

export class Nutrition extends Component {
  render() {

    return (

      // <div className="nutritionWrapper">
      //   <div className="nutrutuin_1">
      //     <h3 className="nutrition_text">Nutrition Basics</h3>
      //   </div>
      //   <div className="nutrutuin_2">

      //     <h3 className="nutrition_text">Nutrition2 Basics</h3>
      //   </div>
      //   <div className="nutrutuin_3">

      //     <h3 className="nutrition_text">Nutrition 3Basics</h3>
      //   </div>
      // </div>

      //   <div>
      //   <Card inverse>
      //     <CardImg className = "img_nutrition_size" height="100px" width="100%" src={image} alt="..." />
      //     <CardImgOverlay>
      //       <CardTitle>Card Title</CardTitle>
      //       <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
      //       <CardText>
      //         <small className="text-muted">Last updated 3 mins ago</small>
      //       </CardText>
      //     </CardImgOverlay>
      //   </Card>
      // </div>
      <div>

      <h1>Nutrition</h1>
      <br/>
        <Link to="/nutrition-basics"> <Card className="text-white text-right">
          <CardImg
            alt="..."
            src={image1}
          ></CardImg>
          <CardImgOverlay>
            <CardTitle tag="h4">Nutrition Basics</CardTitle>
            <CardText>
              Practical recommendations for you
          </CardText>
          </CardImgOverlay>
        </Card>
        </Link>

        <Link to="/nutrition-how-to-eat" >
          <Card className="text-white text-middle">
            <CardImg
              alt="..."
              src={image2}
            ></CardImg>
            <CardImgOverlay>
              <CardTitle className="text-white text-middle" tag="h4">How to eat?</CardTitle>
              <CardText className="text-white text-middle">
              How to eat correctly to lose weight?              
          </CardText>
            </CardImgOverlay>
          </Card>
        </Link>

        <Link to="/nutrition-healthy-meals" >
        <Card className="text-white text-left">
          <CardImg
            alt="..."
            src={image3}
          ></CardImg>
          <CardImgOverlay>
            <CardTitle tag="h4">Healthy Meal Plan</CardTitle>
            <CardText>
            Unleash your culinary creativity 
          </CardText>
          </CardImgOverlay>
        </Card>
        </Link>

        <Link to="/lifestyle" >
        <Card className="text-white text-middle">
          <CardImg
            alt="..."
            src={image4}
          ></CardImg>
          <CardImgOverlay>
            <CardTitle className="text-white text-middle" tag="h4">ShapeIT Lifestyle</CardTitle>
            <CardText className="text-white text-middle" >
            Stronger together!
          </CardText>
          </CardImgOverlay>
        </Card>
        </Link>



      </div>

      // <div className="global-botton-margin">
      //   NUTRITION MAIN PAGE
      // <br />
      //   <a href="/nutrition-basics">Nutrition Basics</a>
      //   <br />
      //   <a href="/nutrition-how-to-eat">How to Eat?</a>
      //   <br />
      //   <a href="/nutrition-healthy-meals">Meal Plans</a>
      // </div> 

    )
  }
}

export default Nutrition
