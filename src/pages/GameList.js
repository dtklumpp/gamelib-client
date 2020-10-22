import React, { useState, useEffect } from "react";
import Games from "../components/Games/Games";
import GameModel from "../models/GameModel";

// class GameList extends React.Component {
//     state = {
//         games: [],
//     }

//     componentDidMount() {
//         this.fetchGames();
//     }

//     fetchGames = () => {
//         GameModel.all()
//             .then(json => {
//                 this.setState({
//                     games: json.games
//                 })
//             })
//     }

//     render() {
//         return (
//             <Games data={this.state.games} />
//         )
//     }
// }

function GameList(props) {
  const [games, setGames] = useState([]);

  useEffect(function () {
    console.log("useEffect was called on mount");
    fetchGames();
  }, []);

  function fetchGames() {
    GameModel.all().then((json) => {
      setGames(json.games);
    });
  }

  return (
    <div>
      <h1>All Games</h1>
      <Games data={games} />
    </div>
  );
}

export default GameList;
