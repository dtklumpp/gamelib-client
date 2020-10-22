import React from "react";
import GameCard from "../components/Games/GameCard";

import useGames from "../hooks/useGames";

function GameShow(props) {
  const [game] = useGames(props.match.params.id);
  return game ? <GameCard game={game} /> : <h3>Loading...</h3>;
}

export default GameShow;
