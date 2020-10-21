import React from 'react';
import GameModel from '../models/GameModel';

class GameList extends React.Component {
    state = {
        games: [],
    }

    componentDidMount() {
        this.fetchGames();
    }

    fetchGames = () => {
        GameModel.all()
            .then(json => {
                this.setState({
                    games: json.games
                })
            })
    }

    render() {
        return (
            <p>GameList</p>
        )
    }
}

export default GameList;