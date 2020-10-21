import React from 'react';
import Games from '../components/Games/Games';
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
            <Games data={this.state.games} />
        )
    }
}

export default GameList;