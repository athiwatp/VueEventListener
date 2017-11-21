const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const app = express()
const port = process.env.PORT || 3000
const server = http.createServer(app)
const io = socketIO(server)

io.on('connection', socket => {

  socket.on('post', message => {
    io.emit('newPost', {
      message
    })
  })

})

server.listen(port, () => {
  console.log(`Server running at port:${port}`)
})