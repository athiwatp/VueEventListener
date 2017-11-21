const express = require('express')
const http = require('http')
const path = require('path')
const socketIO = require('socket.io')

const app = express()
const port = process.env.PORT || 3000

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../dist')))
  app.get('*', (req, res) => {
    res.sendFile('index.html')
  })
}

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