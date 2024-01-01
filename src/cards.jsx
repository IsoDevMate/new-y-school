import React from "react";
import Card from 'react-bootstrap/Card';
//import minbootsrap /css
import 'bootstrap/dist/css/bootstrap.min.css';



export const Cards = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.url} alt="cards-image" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.name}</Card.Text>
        <Card.Text>{props.price}</Card.Text>
       
      </Card.Body>
    </Card>
  );
}

export const Cards1 = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.url} alt="cards-image" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.name}</Card.Text>
        <Card.Text>{props.price}</Card.Text>
       
      </Card.Body>
    </Card>
  );
}
