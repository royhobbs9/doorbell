const express = require('express')
// const app = express()

// app.use(express.static("public"))

// const port = process.env.PORT || 3000


// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.use(express.static("public"));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '../public/index.html');
});

io.on('connection', function (socket) {
    console.log("someone connected");
    socket.emit('news', { hello: 'world' });
    socket.on('test', function (data) {
    console.log('Dis is IT!', data);
  });
});