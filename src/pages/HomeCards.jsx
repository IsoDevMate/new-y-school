/* eslint-disable no-unused-vars */

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardsData, Topcourses } from "../data";
import Skeleton from "@mui/material/Skeleton";
import React from "react";
import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import styled from "styled-components";
import media from "../breakpoints";


const Cards = styled(motion.div)`
  display: flex;
  min-width: 300px;
  flex-direction: column;
  align-items: center;
  text-align: left
  gap: 2em;
  margin: 10px;
  overflow: hidden;
  justify-content:space-between;
  padding-bottom: 10px important!;
  transition: 0.5s ease;
  margin-top: 2em;
  margin-bottom: 2em;
  min-height: 15rem;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
    ${media.sm`
    width: 100%;
    `}

    `;

export default function MediaCard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <dir style={{ dispalay: "flex", flexDirection: "colum", width: "100%" }}>
      <h4
        style={{
          padding: "1rem",
          paddingLeft: "3rem",
          marginBottom: "1rem",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          backgroundColor: "#f5f5f5",
        }}
      >
        Students are viewing
      </h4>
      <div className="home-cards">
        {CardsData.map((i) => {
          return (
            <>
              <Cards
              animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.2 }, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              whileHover={{ scale: 1.03 }} >
              <Card className="card">
               <Link to={"/"} >
               {loading ? (
                <Skeleton variant="rectangular" width="100%" height={140} />
              ) : (
                <CardMedia sx={{ height: 140 }} image={i.imageurl} title="green iguana" />
              )}
              
              </Link >
              <CardContent>
                {loading ? (
                  <Skeleton variant="text" />
                ) : (
                  <Typography gutterBottom variant="h5" component="div">
                    {i.title}
                  </Typography>
                )}
              </CardContent>
              <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
                {loading ? (
                  <Skeleton variant="text" width="6rem" height="30px"/>
                ) : (
                  <Button size="small">{i.name}</Button>
                )}
                {loading ? (
                  <Skeleton variant="text" width="6rem" height="30px"/>
                ) : (
                  <Button size="small">{i.price}</Button>
                )}
              </CardActions>
              </Card>
              </Cards>
           
            </>
          );
        })}
      </div>
      <h4
        style={{
          padding: "1rem",
          paddingLeft: "3rem",
          marginBottom: "1rem",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          backgroundColor: "#f5f5f5",
        }}
      >
        Top courses in business
      </h4>
      <div className="home-cards">
        {Topcourses.map((i) => {
          return (
            <>
            <Cards
              animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.2 }, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              whileHover={{ scale: 1.03 }} >
              <Card className="card">
              {loading ? (
                <Skeleton variant="rectangular" width="100%" height={140} />
              ) : (
                <CardMedia sx={{ height: 140 }} image={i.imageurl} title="green iguana" />
              )}
              <CardContent>
                {loading ? (
                  <Skeleton variant="text" />
                ) : (
                  <Typography gutterBottom variant="h5" component="div">
                    {i.title}
                  </Typography>
                )}
              </CardContent>
              <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
                {loading ? (
                  <Skeleton variant="text" width="6rem" height="30px"/>
                ) : (
                  <Button size="small">{i.name}</Button>
                )}
                {loading ? (
                  <Skeleton variant="text" width="6rem" height="30px"/>
                ) : (
                  <Button size="small">{i.price}</Button>
                )}
              </CardActions>
            </Card>
            </Cards>
            </>
          );
        })}
      </div>
</dir>
);
}