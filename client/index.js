
const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const app = express()
const server = http.createServer(app);
const path = require('path')
const port = process.env.PORT || 3000
const io = new Server(server);

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

io.on('connection', socket => {
    socket.on("send-guess", (guess, room) => {
        if (room === '') {
            socket.broadcast.emit("receive-guess", guess)
        } else {
            socket.to(room).emit("receive-guess", guess)
        }
    })

    socket.on("join-room", room => {
        console.log(room);
        socket.join(room)
    })
})


server.listen(port, () => {
    console.log('listening on *:3000');
});