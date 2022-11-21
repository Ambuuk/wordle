import React from 'react'
import ChatBox from './components/ChatBox'
import GameBoard from './components/GameBoard'
import Keyboard from './components/Keyboard'
import ScoreBoard from './components/ScoreBoard'

export default function Wordle() {
    return (
        <>
            <div className="alert-container" data-alert-container>
            </div>

            <div id="gameScreen">
                <div id="container">
                    <ChatBox />
                    <GameBoard />
                    <ScoreBoard />
                </div>
                <Keyboard />
            </div>
            <script src=" https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.1/socket.io.js"></script>
        </>
    )
}
