import React from 'react'

export default function Wordle() {
    return (<body>
        <div class="alert-container" data-alert-container>
        </div>

        <div id="gameScreen">
            <div id="container">
                <div class="message-container-d">
                    <div id="message-container"></div>
                    <form id="form">
                        <input type="text" id="message-input"></input>
                        <button type="submit" id="send-button" class="btn btn--primary btn--inside">Send</button>
                    </form>
                    <div class="roomPanel">
                        <form class="form">
                            <input type="text" class="roomCode" id="roomCode" placeholder="Өрөөний код" />
                            <button type="button" class="btn btn--primary btn--inside btn--join"
                                id="joinRoomButton">Холбогдох</button>
                        </form>
                    </div>
                </div>
                <div id="game-screen-container">
                    <div data-guess-grid="" class="guess-grid">
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                    </div>
                </div>

                <div class="message-container-d">
                    <div id="message-container"></div>
                    <form id="form">
                        <input type="text" id="message-input"></input>
                    </form>
                </div>
            </div>
            <div data-keyboard class="keyboard">
                <button class="key" data-key="ф">Ф</button>
                <button class="key" data-key="ц">Ц</button>
                <button class="key" data-key="у">У</button>
                <button class="key" data-key="ж">Ж</button>
                <button class="key" data-key="э">Э</button>
                <button class="key" data-key="н">Н</button>
                <button class="key" data-key="г">Г</button>
                <button class="key" data-key="ш">Ш</button>
                <button class="key" data-key="ү">Ү</button>
                <button class="key" data-key="з">З</button>
                <button class="key" data-key="к">К</button>
                <button class="key" data-key="ъ">Ъ</button>

                <button class="key" data-key="й">Й</button>
                <button class="key" data-key="ы">Ы</button>
                <button class="key" data-key="б">Б</button>
                <button class="key" data-key="ө">Ө</button>
                <button class="key" data-key="а">А</button>
                <button class="key" data-key="х">Х</button>
                <button class="key" data-key="р">Р</button>
                <button class="key" data-key="о">О</button>
                <button class="key" data-key="л">Л</button>
                <button class="key" data-key="д">Д</button>
                <button class="key" data-key="п">П</button>
                <button class="key" data-key="е">Е</button>
                <button class="key large" data-enter>Enter</button>
                <button class="key" data-key="я">Я</button>
                <button class="key" data-key="ч">Ч</button>
                <button class="key" data-key="ё">Ё</button>
                <button class="key" data-key="с">С</button>
                <button class="key" data-key="м">М</button>
                <button class="key" data-key="и">И</button>
                <button class="key" data-key="т">Т</button>
                <button class="key" data-key="ь">Ь</button>
                <button class="key" data-key="в">В</button>
                <button class="key" data-key="ю">Ю</button>
                <button class="key medium" data-delete><svg xmlns="http://www.w3.org/2000/svg" height="24"
                    viewBox="0 0 24 24" width="24">
                    <path fill="var(--color-tone-1)"
                        d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z">
                    </path>
                </svg></button>
            </div>
        </div>
        <script src=" https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.1/socket.io.js"></script>
    </body>
    )
}
