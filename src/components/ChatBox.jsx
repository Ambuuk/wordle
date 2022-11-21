import React from 'react'

const ChatBox = () => {
    return (
        <div className="message-container-d">
            <div id="message-container"></div>
            <form id="form">
                <input type="text" id="message-input"></input>
                <button type="submit" id="send-button" className="btn btn--primary btn--inside">Send</button>
            </form>
            <div className="roomPanel">
                <form className="form">
                    <input type="text" className="roomCode" id="roomCode" placeholder="Өрөөний код" />
                    <button type="button" className="btn btn--primary btn--inside btn--join"
                        id="joinRoomButton">Холбогдох</button>
                </form>
            </div>
        </div>
    )
}

export default ChatBox
