import React from "react";
import Slider from "react-slick";
import ClassesCard from "./ClassesCard"; 
import { ClassesList } from "../helpers/ClassesList"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselComponent() {
  const settings = {
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {ClassesList.map((course) => (
        <ClassesCard
        title={course.title}
        semester={course.semester}
        description={course.description}
        skills={course.skills}
        />
      ))}
    </Slider>
  );
}

export default CarouselComponent;