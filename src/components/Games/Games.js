import React from 'react';
import GameCard from './GameCard';

import './Games.css';

const Games = (props) => {
    function generateGameCards(games) {
        return games.map(game => {
            return <GameCard key={game._id} game={game} />
        })
    }

    return (
        <div className='games-container'>
            {generateGameCards(props.data)}
        </div>
    )
}

export default Games;