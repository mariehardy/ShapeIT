import React from "react";
import testimonial1 from '../../assets/img/shapeIT/Olga-Testimonial2_2.jpg'

// reactstrap components
import { UncontrolledCarousel } from "reactstrap";

const carouselItems = [
  {
    src:"https://images.unsplash.com/photo-1566663188515-cded082fcc03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    altText: "Slide 1",
    caption: "Thank you, ShapeIT, for an amazing journey. It is just a great beginning (c)Natalie",

  },
  {
    src:"https://images.unsplash.com/photo-1588453383063-37ea0b78f30f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
    altText: "Slide 2",
    caption: "I personally loved the workouts! At the beginning it was hard. But then little by little - I got used to it and started enjoying the transformation process (c) Olga"
  },
  {
    src: "https://images.unsplash.com/photo-1565787731075-f7e06ca5fa1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
    altText: "Slide 3",
    caption: "Shape It, Baby! became my personal motto. I will definitely recommend this app to anyone who wants to become a better version of themselves (c) Marie"
  }
];

function Carousel(){
  return (
    <>
      <UncontrolledCarousel items={carouselItems} />
    </>
  );
}

export default Carousel;