var http = require('http');

// http.createServer(function(req, res){
//     res.writeHead(200, {'content-type': 'text/html'});
//     res.end('Hello from server');
// }).listen(process.env.PORT, process.env.IP);

// console.log('Server is running');


//for socket io
var socketio = require ('socket.io');
var fs = require("fs");


var handler = function(req, res){

    fs.readFile(__dirname + '/Client.html', function(err, data){
        if(err) {
            
            res.writeHead(500);
            return res.end ('Error occured loading client.html');
            
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    })
    
}


var app = http.createServer(handler);

app.listen(process.env.PORT, process.env.IP);
var io = socketio.listen(app);

io.sockets.on('connection', function (socket){
   setInterval(function(){
       
       var timestamp = new Date();
       console.log('Emitted: ' +timestamp);
       socket.emit('timer', timestamp);
       
       
   },2000);
   
   
   socket.on('submit', function(data){
      console.log('submitted: ' +data); 
   });
   
   
   
   
});
console.log('Running Server');
