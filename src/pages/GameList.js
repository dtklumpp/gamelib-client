import React, { useState, useEffect } from "react";
import Games from "../components/Games/Games";
import GameModel from "../models/GameModel";

function GameList(props) {
  const [games, setGames] = useState([]);

  useEffect(function () {
    console.log("useEffect was called on mount");
    fetchGames();

    // on unmount
    return function () {
      console.log("runs on unmount");
    };
  }, []);

  function fetchGames() {
    GameModel.all().then((json) => {
      setGames(json.games);
    });
  }

  return (
    <div>
      <h1>All Games</h1>
      {games.length ? <Games data={games} /> : <h1>Loading...</h1>}
    </div>
  );
}

export default GameList;
