import React from "react";
import { Cards, Cards1 } from "../cards";
import  { useState, useEffect } from "react";
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
  z-index: 2;
`;

const SlickArrowLeft = ({ onClick }) => {
  console.log('Left arrow clicked');
  return (
    <ArrowContainer onClick={onClick} style={{ left: 10 }}>
      <img src={LeftArrow} alt="prevArrow" />
    </ArrowContainer>
  );
};
const SlickArrowRight = ({ onClick }) => (
  <ArrowContainer onClick={onClick} style={{ right: 10 }}>
    <img src={RightArrow} alt="nextArrow" />
  </ArrowContainer>
);








export default function MainCards() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const cards = CardsData.map((item, index) => (
    <Cards
      key={index}
      url={item.imageurl}
      title={item.title}
      name={item.name}
      price={item.price}
      loading={loading}
    />
  ));

  const cards1 = Topcourses.map((item, index) => (
    <Cards1
      key={index}
      url={item.imageurl}
      title={item.title}
      name={item.name}
      price={item.price}
      loading={loading}
    />
  ));

  const settings = {
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
   
      initialSlide: 0,
    responsive: [
    
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
        }
      },


      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ],
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    
  };

 
  return (
    <div>
      <h4 style={{ 
        padding: "1rem", 
        paddingLeft: "3rem", 
        marginBottom: "1rem", 
        border: "1px solid #ccc", 
        borderRadius: "10px", 
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        backgroundColor: "#f5f5f5", 
      }}>
        Students are viewing
      </h4>
      <Slider {...settings}>{cards}</Slider>
      <h4 style={{ 
        padding: "1rem", 
        paddingLeft: "3rem", 
        marginBottom: "1rem", 
        border: "1px solid #ccc", 
        borderRadius: "10px", 
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        backgroundColor: "#f5f5f5", 
      }}>
        Top courses in business
      </h4>
      <Slider {...settings}>{cards1}</Slider>
    </div>
  );
}
