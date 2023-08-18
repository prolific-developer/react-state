// src/PlayersList.js

import React from "react";
import Player from './Player';
import playersData from './Players'; 

const PlayersList = () => {
  return (
    <div>
      {playersData.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
