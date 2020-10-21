import React from 'react';

const Games = (props) => {
    function generateGameCards(games) {
        return games.map(game => {
            return <p>{game.title}</p>
        })
    }

    return (
        <div className='games-container'>
            {generateGameCards(props.data)}
        </div>
    )
}

export default Games;