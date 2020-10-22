import React from 'react';
import GameCard from '../components/Games/GameCard';
import useGames from '../hooks/useGames';

function GameShow(props) {
    const [game] = useGames(props.match.params.id);
    return ( game ? <GameCard game={game} /> : <h3>Loading...</h3>)
}
export default GameShow;


// class GameShow extends React.Component {
//     state = {
//         game: null,
//     }

//     componentDidMount() {
//         this.fetchGame();
//     }

//     fetchGame = () => {
//         GameModel.show(this.props.match.params.id)
//             .then(json => {
//                 this.setState({
//                     game: json.game
//                 })
//             })
//     }

//     render() {
//         return (
//             // also works and quicker/shorter
//             // <GameCard game={{...this.state.game}}/>

//             this.state.game ?
//                 <GameCard game={this.state.game} /> :
//                 <h3>Loading...</h3>
//         )
//     }
// }
