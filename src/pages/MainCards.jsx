//import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Cards,Cards1} from "../cards";
import { CardsData, Topcourses, responsive } from "../data";
import styled from "styled-components";

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

const cards1 =  Topcourses.map((item, index) => (

  <Cards1
    key={index}
    url={item.imageurl}
    title={item.title}
    name={item.name}
    price={item.price}
  />
));


  return (
   
    <StyledDiv>
    <Div>
      Students are viewing
    </Div>
      <Carousel showDots={false} responsive={responsive}>
        {cards}
      </Carousel>
      <Top>
      Top courses in bussiness
    </Top>
      <Carousel showDots={false} responsive={responsive}>
        {cards1}
      </Carousel>
      </StyledDiv> 
     

  );
}
const StyledDiv = styled.div`
  padding: 0 20px;
  background-color: #fafafa;
  display: flex;
  padding-bottom: 39px;
  flex-direction: column;
  @media (max-width: 991px) {
    padding: 0;
  }
`;

const Div = styled.h2`
  color: var(--red, #000);
  font: 700 20px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Top = styled.h2`
  color: var(--red, #000);
  align-self: stretch;
  margin-top: 37px;
  white-space: nowrap;
  font: 700 20px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

