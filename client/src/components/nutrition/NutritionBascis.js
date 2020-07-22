import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../assets/img/shapeIT/nutrition_main_first.jpg'
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

export class NutritionBasics extends Component {
  render() {
    return (
      <div className="global-botton-margin">

        <Card>
          <CardImg
            alt="..."
            src={image1}
          ></CardImg>
          <CardImgOverlay>
            <CardTitle className="text-right" tag="h1">Nutrition Basics</CardTitle>
            <CardText>
              <h7>Practical recommendations for your nutrition adjustments</h7>
            </CardText>
          </CardImgOverlay>
        </Card>


        <br />
        <div>
          <p>
            Keep in mind that it’s natural that your body needs time to adjust. Be true to yourself and always remember why you started this and why you are doing this.
The success rate for people who stick to this plan is over 90%, regardless of your starting physical level. </p>

          <h2>Energy Balance – what are calories about?</h2>
          <p>
            Calories are the energy units that we receive from food with the number of calories in it. In other words, it represents the amount of energy you can potentially get from consuming these products.

            The next question to ask is “How many calories do we actually need to consume to lose weight?”
Well, this primarily depends upon your Energy Balance.  In the most basic terms – energy balance represents a threshold. In case you consume more calories than you burn you have got a positive energy balance. In case if you consume fewer calories than you have burned – you have got a negative energy balance. In case if your calories eaten are equal to the calories burned – your energy balance is neutral.</p>

          <h2>What does it mean and how does it affect me?</h2>
          <p>
            Your daily calories intake is like a scale, which represents Calories IN (Food and beverages intake) vs. Calories OUT (Body function and physical activity). If you eat more than you burn – you are going to store fat and experience a weight gain. If the amount of burned energy is greater than your calories consumption – the calories deficit is in place. The latter results in the desired weight loss! However, it doesn’t mean that you are going to lose weight extremely once your daily norm is cut in half! For example, if you have to consume 2000 kcal on a daily basis and you reduce them to 1000 kcal/day only – you are not only going to be powerless, but it might also result in counterproductive weight gain, since you might go out of temper and eat everything that you have got in the fridge at once. Then all your efforts will be wasted. This is not something we want to achieve here. Our organism has evolved as such, that it won’t give everything away – it would mean you would starve to death straight away.
However, if you reduce your daily calories consumption to the norm, that you have calculated with the calculator in the Shape Insights section – you will identify a comfortable zone for you organism to lose weight while keeping your metabolism speed at the highest possible level.</p>
          <p>
            <h4>Macronutrients </h4>
Once you have accomplished calculating your daily calories intake requirements – you need to identify how these calories are going to be allocated across Macronutrients (Carbohydrates, Fats and Proteins).

As easy as that, it should look somewhat like this:
PICTURE OF PROTEINS, CARBS, FAT
35% Proteins, 45% Carbs, 20% Fat

These are the recommended norms, which would perfectly complement our ShapeIT training program.

Let us dig dipper into the Macronutrients subject. </p>

          <h2>What are Carbohydrates and which shall I consume?</h2>
          <p>It is one of three Macronutrients that can be found in food. The primary function of it is to provide energy for your body, brain and maintain stable blood glucose levels. Each gram of carbohydrate delivers 4 calories.
In general, one can identify two types of it, namely, complex carbohydrates and simple ones.</p>

          <h4>What is so complex about carbs?</h4>
          <p>
            Complex carbohydrates contain longer chains of sugars as well as some fiber, protein, healthy fats, vitamins and minerals to a certain degree. The presence of the abovementioned components slows down the absorption of those monosaccharides, leading to a more gradual insulin response as well as a greater satiety. WIN-WIN!</p>

          <p>Simple carbohydrates, on the contrary, mostly contain mono- and disaccharides (one and two molecule sugars), which are being digested by our organism pretty quickly. The absorbed sugars get into the blood stream quickly leading to a leap in the insulin levels. The latter results in increased appetite and greater propensity to eat all you have in the fridge.</p>

          <h4>How to find out, which carbs are “bad” and which ones are “good” for me?</h4>
          <p>The answer to the abovementioned question can be found via the Glycemic Index (GI). It shows how fast a certain type of food increases in blood glucose levels. In other words, which carbs are “good” and which ones are actually shooting up your sugar level very fast and make you hungry.</p>

          <p>A healthy way to use the GI principles is to incorporate a range of lower GI carbs that are also low in fat and calories into your meals. Try to avoid the fast absorbing carbs like white bread, sugar, potatoes. To find out more which foods are low, medium or high in GI, please, click here</p>

          <p>As a general rule of thumb, you should hold the lower values and try to omit the high ones:
          <ol>
              <li>0-55 = Low (good)</li>
              <li>56-69 = Medium</li>
              <li>70 or higher = High (bad) </li>
            </ol>
          </p>

          <h2>DOs and DON’Ts by Carbohydrates:</h2>
          <p>

            <li align="left">Choose whole grains, legumes, fresh fruits and vegetables, nuts and seeds</li>
            <li align="left">Reduce/eliminate processed foods, sweets, soda and juice</li>
            <li align="left">Incorporate a range of lower GI carbs that are also low in fat and calories into your meals</li>

          </p>
          <h2>What are Proteins and which shall I consume?</h2>
          <p>Protein is made of thousands of smaller units, called amino-acids. Its primary function is to provide energy for the body. It does not only help in repairing cells and body tissue, but it also helps in supporting immune responses as well as in producing enzymes and hormones. Protein is a major part of your nails, muscles, bones, skin, hair, as well as inner organs.</p>

          <p>Dietary proteins can be subdivided into three prats: complete proteins, incomplete proteins and the complementary ones. Whereas complete proteins contain all of the essential amino-acids in the required amounts, incomplete ones are missing one or more of the essential amino acids. The latter leads towards protein being imbalanced. However, some of the incomplete proteins combined together can compensate for the lack of each other and form a complete protein.</p>

          <p>Complete proteins can be found in animal foods, such as meat, poultry, seafood and eggs etc.</p>
          <p>Incomplete ones are usually contained in the plant foods, such as beans, grains, seeds, nuts and vegetables.</p>

          <h2>DOs and DON’Ts by Proteins:</h2>
          <p>
            <li align="left">Do not overeat protein, since the excess of it just like with carbs and fat, will result in the weight gain</li>
            <li align="left">Opt for nutrient-dense protein foods such as eggs, beans, low-fat dairy products, lean poultry and meat, seafood, unsalted nuts and seeds</li>
            <li align="left">Select fresh poultry, meat and seafood over processed alternatives</li>
            <li align="left">Do not eat the poultry skin. Try to remove it before cooking</li>
            <li align="left">Trim or drain fat from meats before</li>
          </p>
          <p>To have a proper understanding of what such a Menu might look like, an example has been done for you <Link to="/nutrition-healthy-meals"> HERE.</Link></p>

<h4>Cheat Meal</h4>

<p>In order to keep your metabolism running as fast as possible, you will need to eat above your maintenance calories once per week – Cheat meal!</p>

        </div>
        <p>
          <Link to="/nutrition">Back</Link></p>
          
      </div>
    )
  }
}

export default NutritionBasics