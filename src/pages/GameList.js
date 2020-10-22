import React from "react";
import Games from "../components/Games/Games";
import useGames from "../hooks/useGames";

function GameList(props) {
  const [games, fetchGames] = useGames();

  return (
    <div>
      <h1>All Games</h1>
      <button onClick={fetchGames}>Refresh</button>
      {games.length ? <Games data={games} /> : <h1>Loading...</h1>}
    </div>
  );
}

export default GameList;
