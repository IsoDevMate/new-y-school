import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { CardsData, Topcourses } from "../data";



export default function MediaCard() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
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
            <Card sx={{ minWidth: 270 }}>
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
            <Card sx={{ minWidth: 270 }}>
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
          );
        })}
      </div>
 
    </div>
    
  );
}
