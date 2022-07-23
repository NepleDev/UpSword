import React, { useState } from 'react';

const RhythmGame = () => {
    const gameNameList = ["Arcaea", "Sound Voltex", "Cytus II", "Rotaeno", "Phigros"]
    const [ gameIdx, setGameIdx ] = useState(0);

    function changeGame() {
        setGameIdx(gameIdx >= gameNameList.length - 1 ? 0 : gameIdx+1);
        console.log(gameIdx, gameNameList[gameIdx]);
    }

    return (
        <div>
            <h1>현재 플레이 중인 리듬게임 : {gameNameList[gameIdx]}</h1>
            <button onClick={changeGame}>안해!</button>
        </div>
    )
}

export default RhythmGame;