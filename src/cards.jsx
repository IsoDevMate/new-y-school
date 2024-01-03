/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
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
  padding-bottom: 10px important!;
  transition: 0.5s ease;
  border-radius: 20px;
   /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);*/

  &:hover {

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.01);


  }

  .MuiCard-root {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2em;
    padding: 0 !important;
    transition: 0.5s ease;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  .items {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
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
  const { loading, url, name, price,title } = props;
  return (
    <ThemeProvider theme={theme}>
    <CardContainer className="items">
      
          <motion.div   animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.2 }, y: 0 }}
           initial={{ opacity: 0, y: 100 }}
           whileHover={{ scale: 1.03 }}
           className="item">
            
          <Link to={"/"} >
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
          <img src={url} alt="Courses" />
          </div>
          </Link> 

            <h2>{title}</h2>
            <span>
                <Button size="small">{name}</Button>
                </span>
              <span><Button size="small">${price}</Button>
             </span> 
          
          </motion.div> 
      
    </CardContainer>
    </ThemeProvider>
  );
};



export const Cards1 = (props) => {
  const { loading, url, title, name, price } = props;

  return (
    <CardContainer className="items"
    >
      <motion.div   animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.2 }, y: 0 }}
           initial={{ opacity: 0, y: 100 }}
           whileHover={{ scale: 1.03 }}
           className="item">
            
          <Link to={"/"} >
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
          <img src={url} alt="Courses" />
          </div>
          </Link> 

            <h2>{title}</h2>
            <span>
                <Button size="small">{name}</Button>
                </span>
              <span><Button size="small">${price}</Button>
             </span> 
          
          </motion.div> 
    </CardContainer>
  );
};