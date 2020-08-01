import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import image4 from '../../assets/img/shapeIT/lifestyle.jpg'
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle
} from "reactstrap";

export class Lifestyle extends Component {
  render() {

    return (

      <div>
        <Card>
          <CardImg
            alt="..."
            src={image4}
          ></CardImg>
          <CardImgOverlay>
            <CardTitle className="text-middle text-white " tag="h4">ShapeIT Lifestyle</CardTitle>

          </CardImgOverlay>
        </Card>

        <h2>SHAPER</h2>

        <h4>S – Strong Spirit</h4>
        <div>
          <p>Shapers’ strong spirit is unbreakable in every way. We stay strong in our decision to change – this is what unites us!</p>
        </div>
        <h4>H – Honesty</h4>
        
        <p>Shapers are honest with themselves. We do not want to look like any celebrity. We want to be a better version of who we are. While aspiring to change, we need to be honest with ourselves on what we do in order to achieve it and set the realistic goals</p>

        <h4>A - Ambition</h4>

        <p>Shapers set goals and also achieve them. We are ambitious in our vision and stay motivated to make headway in our journey </p>

        <h4>P – Persistence</h4>

        <p>Shapers never give up. We can fall down just like anybody else, but we rise up again quickly, and then keep pushing to the limit.</p>

        <h4>E – Enjoyment</h4>

        <p>Shapers build healthy habits while having FUN. We break the perception of fitness as being torture and turn it into a game! So, cheer up and do another set </p>

        <h4>R - Responsibility</h4>

        <p>Shapers take care about what they do in order to achieve the best results. At the end of the day, it is you who decides, whether or not you can do it, and it’s only you, who defines your limits.</p>


        <h4>There are 4 more steps of becoming a real hardcore Shaper!</h4>

        <p>
        <div>
          <ol>

            <br />
            <li>We do not change our diet, we change our lifestyle. ShapeIT is a Social Fitness Game, which helps you to become a fitter, healthier, happier YOU and helps you live these habits every day, so you do not have to “go on a diet” ever again. It is about having a positive relationship with exercises, nutrition and your own body.</li> <br />
            <li>ShapeIT is about persistence and patience. These are the two only keys, which help you to change and grow over yourself on your transformation journey. There might be some ups and downs on your way, but while having both of those qualities on your mind and by living them, you can achieve a true result.</li><br />
            <li>We might derail sometimes from the path, but it doesn’t mean that we have given up and will not keep going any longer. Quitting for a day doesn’t mean quitting being a Shaper! The most important thing is to come back on time.</li><br />
            <li>The last, but not least, we are building habits while having FUN! So, be an active part of our Shapers’ Community, interact with your fellow Shapers on Instagram, have Fun, use Shapers’ hashtags, show your progress, your favorite healthy recipes, how you do your workouts etc. You have got a power to motivate and inspire others! Spread the positive vibes around you)</li><br />
          </ol>
          </div>
        </p>


        <p>
          <Link to="/nutrition">Back</Link>
        </p>
      </div>
    )
  }
}

export default Lifestyle