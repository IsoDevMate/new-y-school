/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
// import Card from 'react-bootstrap/Card';
//import minbootsrap /css
// import 'bootstrap/dist/css/bootstrap.min.css';
import { AiTwotoneStar } from "react-icons/ai";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Skeleton from "@mui/material/Skeleton";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  media  from './breakpoints'

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif', 
  },
});



const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left
  gap: 2em;
  margin: 10px;
  overflow: hidden;
  justify-content:space-between;
  padding-bottom: 10px important!;
  transition: 0.5s ease;
  border-radius: 20px;
  margin-top: 2em;copilot
  margin-bottom: 2em;
  min-height: 15rem;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }


  gap: 2em;
    ${media.sm`
    width: 100%;
    `}
  
  
  
  .items {
    display: flex;
    justify-content: center;
    align-items: center;
   
    margin-top: 2em;
    z-index: 2;
    min-height: 15rem;

   div{
  margin-bottom: 2em;
    border-radius: 20px;

   }
    .item {
      margin-top: 2em;
      margin-left: 2em;
      margin-right: 2em;  
  img {
      max-height: 250px;
      max-width: 250px;
      object-fit: cover;
      border-radius: 20px;
      cursor: pointer;
      transition: 0.4s;
      &:hover {
        transform: scale(1.03);
      }
  }

  h2 {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    margin-top: 7px;
  }

  span {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 4px;
    align-items: center;
  }

   
  }
  }
`;
    
  
export const Cards = (props) => {
  const { loading, url, title, name, price } = props;

  return (
    
    <CardContainer
      animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.2 }, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      whileHover={{ scale: 1.01 }}
    >
      <Card sx={{ width: "17rem", minHeight: "20rem" }}>
         <Link to={"/"} >
          <div>
          {loading ? <Skeleton variant="rectangular" width="17rem" height="140px" /> : <CardMedia sx={{ height: 140, width: "17rem" }} image={url} title="Courses" />}
          </div>
        </Link>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" noWrap={false}>
         {loading ? <Skeleton variant="text" /> : title}
         </Typography>
        </CardContent>
        <CardActions style={{ flexDirection: 'column' }}>
         {loading ? <Skeleton variant="text" width="2rem" height="30px"/> : <Button size="small">{name}</Button>}
          {loading ? <Skeleton variant="text" width="2rem" height="30px"/> : <Button size="small">{price}</Button>}
         </CardActions>
      </Card>
    </CardContainer>
   
);
};



export const Cards1 = (props) => {
  const { loading, url, title, name, price } = props;

  return (
  
    <CardContainer
      animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.2 }, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      whileHover={{ scale: 1.01 }}
    >
      <Card sx={{ width: "17rem", minHeight: "20rem" }}>
         <Link to={"/"} >
        {loading ? <Skeleton variant="rectangular" width="17rem" height="140px" /> : <CardMedia sx={{ height: 140, width: "17rem" }} image={url} title="Courses" />}
        </Link>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" noWrap={false}>
         {loading ? <Skeleton variant="text" /> : title}
         </Typography>

        </CardContent>
        <CardActions style={{ flexDirection: 'column' }}>
         {loading ? <Skeleton variant="text" width="2rem" height="30px"/> : <Button size="small">{name}</Button>}
          {loading ? <Skeleton variant="text" width="2rem" height="30px"/> : <Button size="small">{price}</Button>}
         </CardActions>
      </Card>
    </CardContainer>
   
);
};