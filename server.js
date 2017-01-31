var app = require('http').createServer();
var io = require('socket.io')(app);
var port = 444;

app.listen(port, function(){
    console.log(this._connectionKey);
});

console.log('Server now running on port '+ port);

io.on('connection', function(socket){
    socket.emit('alert', 'Connection now established to server');

socket.on('clientConnection', function(id){
    console.log(id);
});

socket.on('acceleration', function(data){
    console.log(data);
    socket.broadcast.emit('gyro', data);
});

});

