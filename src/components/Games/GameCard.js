import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = (props) => {
    console.log(props);
    const { title, publisher, coverArtUrl, _id } = props.game;
    return (
        <Link to={`/games/${_id}`}>
            <div className='game-card'>
                <div className='image-wrapper'>
                    <img src={coverArtUrl} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>By: {publisher}</p>
            </div>
        </Link>
    )
}

export default GameCard;