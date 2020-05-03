const express = require('express')
const path = require('path')
const socketio = require('socket.io')
const http = require('http')
const app = express()
const server = http.createServer(app)
const io = socketio(server)



app.use('/', express.static(path.join(__dirname, 'frontend')))

io.on('connection', (socket) => {
    console.log("New Socekt formed from" + socket.id)
    socket.emit('connected')
    socket.on('send msg', (data) => {
        console.log(data.msg)
        //io.emit("recv_msg", data)
        socket.broadcast.emit("recv_msg", data)
    })
})

server.listen(2345, () => {
    console.log("Server started at https://localhost:2345")
})