import React from "react";
import { Cards, Cards1 } from "../cards";
import { CardsData, Topcourses } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import LeftArrow from "../public/left-arrow.svg";
import RightArrow from "../public/right-arrow.svg";

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const SlickArrowLeft = ({ onClick }) => (
  <ArrowContainer onClick={onClick} style={{ left: 10 }}>
    <img src={LeftArrow} alt="prevArrow" />
  </ArrowContainer>
);

const SlickArrowRight = ({ onClick }) => (
  <ArrowContainer onClick={onClick} style={{ right: 10 }}>
    <img src={RightArrow} alt="nextArrow" />
  </ArrowContainer>
);

export default function MainCards() {
  const cards = CardsData.map((item, index) => (
    <Cards
      key={index}
      url={item.imageurl}
      title={item.title}
      name={item.name}
      price={item.price}
    />
  ));

  const cards1 = Topcourses.map((item, index) => (
    <Cards1
      key={index}
      url={item.imageurl}
      title={item.title}
      name={item.name}
      price={item.price}
    />
  ));

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
    
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <div>
      <h3 style={{ padding: "1rem", paddingLeft: "3rem", marginBottom: "1rem" }}>Students are viewing</h3>
      <Slider {...settings}>{cards}</Slider>
      <h3 style={{ padding: "1rem", paddingLeft: "3rem", marginBottom: "1rem" }}>Top courses in business</h3>
      <Slider {...settings}>{cards1}</Slider>
    </div>
  );
}

