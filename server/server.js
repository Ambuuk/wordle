const io = require('socket.io')(3000, {
    cors: {
        origin: ['http://localhost:8080']
    }
})

io.on('connection', socket => {
    console.log(socket.id)
    socket.on("send-guess", guess => {
        socket.broadcast.emit("receive-guess", guess)
        console.log(guess)
    })
})