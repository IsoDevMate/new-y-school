/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
// import Card from 'react-bootstrap/Card';
//import minbootsrap /css
// import 'bootstrap/dist/css/bootstrap.min.css';

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Cards = (props) => {
  return (
    <div className="couggrse">
      <Card>
        <CardMedia
          sx={{ height: 140, width: "17rem" }}
          image={props.url}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{props.name}</Button>
          <Button size="small">{props.price}</Button>
        </CardActions>
      </Card>
    </div>
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={props.url} alt="cards-image" />
    //   <Card.Body>
    //     <Card.Title>{props.title}</Card.Title>
    //     <Card.Text>{props.name}</Card.Text>
    //     <Card.Text>{props.price}</Card.Text>

    //   </Card.Body>
    // </Card>
  );
};

export const Cards1 = (props) => {
  return (
    <div className="">
      <Card className="couggrse" sx={{ width: "17rem",height:'17rem' }}>
        <div className="couggrse">
           <CardMedia
          sx={{ width: "17rem" }}
          image={props.url}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{props.name}</Button>
          <Button size="small">{props.price}</Button>
        </CardActions>
      
        </div>
       </Card>
    </div>
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={props.url} alt="cards-image" />
    //   <Card.Body>
    //     <Card.Title>{props.title}</Card.Title>
    //     <Card.Text>{props.name}</Card.Text>
    //     <Card.Text>{props.price}</Card.Text>

    //   </Card.Body>
    // </Card>
  );
};
