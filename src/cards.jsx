/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
// import Card from 'react-bootstrap/Card';
//import minbootsrap /css
// import 'bootstrap/dist/css/bootstrap.min.css';
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
  text-align: center;
  margin: 10px;

  img {
    width: 17rem;
    height: 17rem;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 10px 10px 24px #b5b5b5, -17px -17px 24px #ffffff96;
    cursor: pointer;
    transition: 0.4s;
    :hover {
      transform: scale(1.04);
    }
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    margin-top: 7px;
  }

  span {
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
    align-items: center;

    h3 {
      display: flex;
      font-weight: 500;
      align-items: center;
      gap: 7px;
      color: gray;
      span {
        color: var(--primaryColor);
      }
    }

    h4 {
      font-size: 18px;
      color: gray;
      display: flex;
      align-items: center;
      gap: 7px;

      .icon {
        color: #ffbb00;
      }
    }
  }
`;
export const Cards = (props) => {
  const { loading, url, title, name, price } = props;

  return (
    <ThemeProvider theme={theme}>
    <CardContainer
      animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.2 }, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      whileHover={{ scale: 1.04 }}
    >
       <Card sx={{ width: "17rem", minHeight: "20rem" }}>
         <Link to={"/"} >
        {loading ? <Skeleton variant="rectangular" width="17rem" height="140px" /> : <CardMedia sx={{ height: 140, width: "17rem" }} image={url} title="Courses" />}
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {loading ? <Skeleton variant="text" /> : title}
          </Typography>
        </CardContent>
        <CardActions>
          {loading ? <Skeleton variant="text" width="2rem" height="30px"/> : <Button size="small">{name}</Button>}
          {loading ? <Skeleton variant="text" width="2rem" height="30px"/> : <Button size="small">{price}</Button>}
        </CardActions>
      </Card>
    </CardContainer>
    </ThemeProvider>
  );
};



export const Cards1 = (props) => {
  const { loading, url, title, name, price } = props;

  return (
    <CardContainer
      animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.2 }, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      whileHover={{ scale: 1.04 }}
    >
      <Card sx={{ width: "17rem", minHeight: "20rem" }}>
         <Link to={"/"} >
        {loading ? <Skeleton variant="rectangular" width="17rem" height="140px" /> : <CardMedia sx={{ height: 140, width: "17rem" }} image={url} title="Courses" />}
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {loading ? <Skeleton variant="text" /> : title}
          </Typography>
        </CardContent>
        <CardActions>
          {loading ? <Skeleton variant="text"  width="2rem" height="30px"/> : <Button size="small">{name}</Button>}
          {loading ? <Skeleton variant="text"   width="2rem" height="30px"/> : <Button size="small">{price}</Button>}
        </CardActions>
      </Card>
    </CardContainer>
  );
};



