import React, { useState, useEffect } from "react";
import GameModel from "../models/GameModel";
import GameCard from "../components/Games/GameCard";

function GameShow(props) {
  const [game, setGame] = useState(null);

  useEffect(function () {
    fetchGame();
  }, []);

  function fetchGame() {
    GameModel.show(props.match.params.id).then((data) => {
      setGame(data.game);
    });
  }

  return game ? <GameCard game={game} /> : <h3>Loading...</h3>;
}

export default GameShow;
