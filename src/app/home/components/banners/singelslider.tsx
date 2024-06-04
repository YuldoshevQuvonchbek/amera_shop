"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from "./arrows";

const settings = {
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

interface typeSettings {
  children: React.ReactNode;
}

const Singelslider: React.FC<typeSettings> = ({ children }) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default Singelslider;
