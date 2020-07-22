import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import image3 from '../../assets/img/shapeIT/nutrition_main_third.jpg'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardTitle,
  CardSubtitle,
  CardText,
  ListGroupItem,
  ListGroup
} from "reactstrap";

export class NutritionHealthyMeal extends Component {
  render() {
    return (
      <div className="global-botton-margin">

        <Card>
          <CardImg
            alt="..."
            src={image3}
          ></CardImg>
          <CardImgOverlay>
            <CardTitle className="text-left" tag="h4">HEALTHY MEAL</CardTitle>

          </CardImgOverlay>
        </Card>

        <br />
        <div>
          {/* <h1>HEALTHY MEAL PLAN</h1> */}
          <p>We are supporting you everywhere! This nutrition example can serve you as a basis for your culinary creativity.</p>
          <h2>Breakfast</h2>
          <p>Breakfast can be formed from simple carbohydrates / fruits / dried fruits / honey / syrups + complex carbohydrates (cereals, bread, etc.) + nuts or nutty pastas. For example: 50 gr (dry) porridge based on water + flax seeds, chia, sesame (a teaspoon of each kind) +30 g dried fruits.</p>
          <h2>First snack</h2>
          <p>It can include a portion of nuts (20gr) plus one fruit or fruit salad, cereal bar, etc. Fruits such as banana, grapes, persimmon eat at breakfast/first snack.</p>
          <p>Note:  Fruits with a low glycemic index and berries can be eaten up to 2-3 p.m. hours. Natural syrups, honey, fructose, dried fruits, nuts eat up to 12 p.m.. Vitamins/ linseed oil can be eaten at breakfast.</p>
          <h2>Lunch</h2>
          <p>Include 60 g (for uncooked) complex carbohydrates (in a form of cereals or pasta), 150 g of protein (fish / meat / seafood) and vegetables. Complex carbohydrates and protein are necessary for the lunch, vegetables are optional.</p>
          <h2>Second snack</h2>
          <p>It is perfect time for a little sweet stuff without SUGAR (1 sugar-free pastille). As snack you can eat 200 g pure omelet or with seafood/ salad with seafood. The most ideal variant of snack is a cottage cheese (soft one or cottage cheese + yogurt).</p>
          <h2>Dinner</h2>
          <p>It is time for protein (fish / meat / seafood) and non-starchy vegetables. Add 1 teaspoon of oil.</p>
          <p>Do not be lazy and test your creativity!</p>



        </div>
        <p>
          <Link to="/nutrition">Back</Link>
        </p>
      </div>
    )
  }
}

export default NutritionHealthyMeal