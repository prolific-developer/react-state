// src/Player.js

import React from "react";
import Card from "react-bootstrap/Card";
import image from '../image/wallpaperflare.com_wallpaper.jpg'

const Player = ({ name, team, nationality, jerseyNumber, age }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image}  width={270} height={250}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
    
  );
};
Player.defaultProps = {
    name: "Unknown Player",
    team: "Unknown Team",
    nationality: "Unknown Nationality",
    jerseyNumber: "N/A",
    age: "N/A",
    imageUrl: "wallpaperflare.com_wallpaper.jpg'",
  };

export default Player;
