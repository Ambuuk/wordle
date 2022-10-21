const io = require('socket.io')(3000, {
    cors: {
        origin: ['http://localhost:8080']
    }
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