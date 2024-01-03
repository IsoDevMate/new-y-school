/* eslint-disable no-unused-vars */
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardsData, Topcourses } from "../data";

export default function MediaCard() {
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
              <Card className="card" >
                <CardMedia
                  sx={{ height: 140 }}
                  image={i.imageurl}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {i.title}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
                </CardContent>
                <CardActions
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button size="small">{i.name}</Button>
                  <Button size="small">{i.price}</Button>
                </CardActions>
              </Card>
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
              <Card className="card">
                <CardMedia
                  sx={{ height: 140 }}
                  image={i.imageurl}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {i.title}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
                </CardContent>
                <CardActions
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button size="small">{i.name}</Button>
                  <Button size="small">{i.price}</Button>
                </CardActions>
              </Card>
            </>
          );
        })}
      </div>
    </dir>
  );
}
