/* eslint-disable react/prop-types */
import styled from "styled-components";

export const Cards = (props) => {
  return (
    <div className="card">
      <Img src={props.url} alt="cards-image" />
      <Div>{props.title}</Div>
      <Title>{props.name}</Title>
      <Price>{props.price}</Price>
    </div>
  );
}

export const Cards1 = (props) => {
  return (
    <div className="card">
      <Img src={props.url} alt="cards-image" />
      <Div>{props.title}</Div>
      <Title>{props.name}</Title>
      <Price>{props.price}</Price>
    </div>
  );
}





const Div = styled.h2`
  color: var(--red, #000);
  align-self: stretch;
  margin-top: 13px;
  font: 400 15px Inter, sans-serif;
`;


const Title = styled.p`
  color: #aba7a7;
  align-self: stretch;
  margin-top: 8px;
  font: 400 13px Inter, sans-serif;
`;

const Price = styled.p`
  color: var(--red, #000);
  align-self: stretch;
  margin-top: 8px;
  font: 400 13px Inter, sans-serif;
`;

const Img = styled.img`
  aspect-ratio: 1.43;
  object-fit: contain;
  object-position: center;
  width: 219px;
  overflow: hidden;
  align-self: center;
`;