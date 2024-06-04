"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from "./arrows";
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
interface typeSettings {
  children: React.ReactNode;
}
export const TopFlashBanner: React.FC<typeSettings> = ({ children }) => {
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>{children}</div>
      </Slider>
    </div>
  );
};
