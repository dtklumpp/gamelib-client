import {useState, useEffect} from 'react';
import GameModel from '../models/GameModel';

function useGames(gameId) {
    const [games, setGames] = useState([]);

    function fetchGames(id) {
        if(id){
            GameModel.show(id).then((data) => {
                setGames(data.game);
            })
        } else {
            GameModel.all().then((data) => {
                setGames(data.games);
            })
        }
    }

    useEffect(function () {
        fetchGames(gameId);
    }, [gameId])

    return [games, fetchGames];

}
export default useGames;

