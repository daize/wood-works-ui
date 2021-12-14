import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { width } from "@mui/system";

const DesignCarousel = (props) => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: "https://source.unsplash.com/500x500/?interior",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: "https://source.unsplash.com/500x500/?design"
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <img style={{ width : 1000 , height : 500 }} src={props.item.image}  />
      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default DesignCarousel;
