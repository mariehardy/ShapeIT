import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import image2 from '../../assets/img/shapeIT/nutrition_main_second.jpg'
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

export class NutritionHowToEat extends Component {
  render() {
    return (
      <div className="global-botton-margin">

        <Card>
          <CardImg
            alt="..."
            src={image2}
          ></CardImg>
          <CardImgOverlay>
            <CardTitle className="text-white text-middle" tag="h4">How to Eat?</CardTitle>
            <CardText>
              <div className="text-white text-middle" tag="h5">Unleash your culinary creativity</div>
            </CardText>
          </CardImgOverlay>
        </Card>


        <p>Your training and your Shaping highly depend (up to 70%) on your nutrition behavior! You exercise 6-7 hours per week at most, what do you do for the left hours? Work and/or study, eat, sleep and live life. And only food gives you power! It is only fuel to your body. And depending on the quality of that fuel, body operates accordingly.
        So, the main question is: How eat correctly to lose weight and at the same time have enough energy for a whole day?
        Note: For someone, changing the eating behavior will be harder than for another one. But if you want to achieve the great results from training, you should find a way to pass through challenges! Remember: The only one who can stop you – it’s you!
        You should eat 3 regular healthy meals each day with 2 snacks.</p>


        <h2>Try to eat every 3 - 4 hours</h2>
        <p>For example, if you get up at 7:30 and go to bed at 23:00, you can have this timetable: 8:00 – breakfast, 11:00 – first snack, 14:00 – lunch, 17:00 – second snack, 20:00 – dinner. Never skip a main meal.</p>
        <h2>Maintain the healthy volume and caloric intake</h2>
        Like:
        <ul >
          <div>
            <p>
              <li>Breakfast – 25%</li>
              <li>first snack – 15%</li>
              <li>lunch – 30%</li>
              <li>second snack – 10%</li>
              <li>dinner – 20%.</li></p></div></ul>
        <h2>Drink water</h2>
        <p>Always drink 1-2 glasses of clean water 15-20 minutes BEFORE any meal. Never drink anything DURING your meal. You can drink water, tea or coffee one hour AFTER the meal. The most important condition of your effective slimming – a minimum of 30 ml/kg of pure water per day!</p>
        <h2>Use small spoon</h2>
        <p>Try to eat slower with small spoon. Your body will have enough time to signal you about your saturation. When we eat fast with large chunks, we often miss this moment and feel heaviness in the abdomen. It is wrong.  Hint: Thermally unprocessed food saturates better than boiled, milled, mashed food, etc.</p>
        <h2>Exclude junk food</h2>
        <p>Stop to eat any fast food and drink sweet fizzy drinks. Avoid fat, fried, smoked food. Do not drink alcohol.</p>
        <h2>Organize and plan</h2>
        <p>Organization and planning of your nutrition are keys to your success! Prepare the meal for 2-3 days in advance. Or if you love cooking, prepare the meal every day. The great idea is to have a nutrition diary. It will help you to plan what do you need to buy in the store, write down new healthy recipes, track the amount of water you need to drink, etc.</p>




        <p><Link to="/nutrition">Back</Link></p>
      </div>
    )
  }
}

export default NutritionHowToEat