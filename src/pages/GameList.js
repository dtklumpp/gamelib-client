import React from 'react';

class GameList extends React.Component {
    state = {
        games: [],
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/v1/games')
            .then(response => response.json())
            .then(json => console.log(json))
    }

    render() {
        return (
            <p>GameList</p>
        )
    }
}

export default GameList;