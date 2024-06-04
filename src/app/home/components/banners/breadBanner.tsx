"use client";
import { Arrow } from "@radix-ui/react-select";
import React from "react";
import Slider from "react-slick";

const settings = {
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
interface typeSettings {
  children: React.ReactNode;
}

export const BreadBanner: React.FC<typeSettings> = ({ children }) => {
  return <Slider {...settings}>{children}</Slider>;
};
