import React from 'react';
import GameModel from '../models/GameModel';
import GameCard from '../components/Games/GameCard';

class GameShow extends React.Component {
    state = {
        game: null,
    }

    componentDidMount() {
        this.fetchGame();
    }

    fetchGame = () => {
        GameModel.show(this.props.match.params.id)
            .then(json => {
                this.setState({
                    game: json.game
                })
            })
    }

    render() {
        return (
            this.state.game ?
                <GameCard game={this.state.game} /> :
                <h3>Loading...</h3>
        )
    }
}

export default GameShow;