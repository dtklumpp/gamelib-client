import React from 'react';
import Games from '../components/Games/Games';
import useGames from '../hooks/useGames';


function GameList(props) {

    const [games] = useGames();

    return (
        <div>
            <h2>All Games kk</h2>
            <Games data={games}/>
        </div>
    )
}
export default GameList;









// class GameList extends React.Component {
//     state = {
//         games: [],
//     }

//     componentDidMount() {
//         this.fetchGames();
//     }

//     fetchGames = () => {
//         GameModel.all()
//             .then(json => {
//                 this.setState({
//                     games: json.games
//                 })
//             })
//     }

//     render() {
//         return (
//             <Games data={this.state.games} />
//         )
//     }
// }




// const gamesArr = [
//     {
//         "_id": "5f9047e85455fbe527c997c2",
//         "title": "Half-Life 2",
//         "publisher": "Valve",
//         "coverArtUrl": "https://cdn.mos.cms.futurecdn.net/yeLLJgaqz2UC6dDELTmf3S.jpg",
//         "completed": true,
//         "__v": 0
//       }
// ]


    // function getGames() {
    //     setGames(gamesArr);
    // }



            {/* <button onClick={getGames}>Get Games</button> */}



                // useEffect(function(){
    //     console.log('called useEffect');
    // })

    // useEffect(function(){
    //     console.log('called useEffect onMount');
    // }, [])

    // useEffect(function(){
    //     console.log('called useEffect ongameschange');
    // }, [games])





//works
    // const [five, setFive] = useState(5);
        // const [state, makeState] = useState(5);
    // console.log('state:', makeState)

//doesn't work
    // setGames([6]);


                {/* <button onClick={fetchGames}>Retrieve Games</button> */}


                            {/* {games.length} */}

