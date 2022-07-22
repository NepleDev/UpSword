import React, { useState } from 'react';

const Main = () => {
    const gameNameList = ["Arcaea", "Sound Voltex", "Cytus II", "Rotaeno", "Phigros"]
    let gameIdx = 0

    function changeGame() {
        gameIdx = gameIdx >= gameNameList.length - 1 ? 0 : gameIdx++;
        console.log(gameIdx, gameNameList[gameIdx]);
    }

    return (
        <div>
            <h1>현재 플레이 중인 리듬게임 : {gameNameList[gameIdx]}</h1>
            <button onClick={changeGame}>안해!</button>
        </div>
    )
}

export default Main;