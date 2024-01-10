
import React from "react";
import { useState,useEffect } from "react";
import { motion } from "framer-motion";

import styled from "styled-components";
import media from "../breakpoints";
import GalleryVertical from "../card";


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
    <dir style={{ dispalay: "flex", flexDirection: "colum", width: "100%" ,paddingLeft:'1rem'}}>
      <h4
        style={{
          padding: "1rem",
          paddingLeft: "3rem",
          marginBottom: "1rem",
          fontWeight: "bold",
        //  border: "1px solid #ccc",
        //  borderRadius: "10px",
         // boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        //  backgroundColor: "#f5f5f5",
        }}
      >
        Students are viewing
      </h4>
     <GalleryVertical />
      <h4
        style={{
          padding: "1rem",
          paddingLeft: "3rem",
          marginBottom: "1rem",
          fontWeight: "bold",
       //   border: "1px solid #ccc",
        //  borderRadius: "10px",
        //  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        //  backgroundColor: "#f5f5f5",
        }}
      >
        Top courses in business
      </h4>
      <GalleryVertical />
</dir>
);
}
