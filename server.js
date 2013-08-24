
var url = require('url')
var express = require('express')
var app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);


app.use(express.static(__dirname + '/'));
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

io.sockets.on('connection', function (socket) {
    socket.on('msg', function (data) {
        console.log("msg", data)
        socket.emit("response", "hi?")
    });
});



server.listen(8888);