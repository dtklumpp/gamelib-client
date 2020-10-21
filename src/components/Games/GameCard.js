import React from 'react';

const GameCard = (props) => {
    console.log(props);
    const { title, publisher, coverArtUrl } = props.game;
    return (
        <div className='game-card'>
            <div className='image-wrapper'>
                <img src={coverArtUrl} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>By: {publisher}</p>
        </div>
    )
}

export default GameCard;