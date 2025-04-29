var express = require('express');
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("Node is WORKING!");

var socket = require('socket.io');


var io = socket(server);

//attempt at exporting
// export var io = socket(server);
// module.exports = { io };


io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('new connection');
    console.log(socket);
}