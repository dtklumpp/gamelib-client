const URL = "http://localhost:3001/api/v1/games";

class GameModel {
  static all = () => {
    return fetch(URL).then((response) => response.json());
  };

  static show = (gameId) => {
    return fetch(`${URL}/${gameId}`).then((response) => response.json());
  };

  static create = (gameData) => {
    return fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameData),
    }).then((response) => response.json());
  };

  static edit = (gameId, gameData) => {
    return fetch(`${URL}/${gameId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameData),
    }).then((response) => response.json());
  };
}

export default GameModel;
