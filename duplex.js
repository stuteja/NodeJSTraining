var net = require("net"),
    fs =require("fs");
var server = net.createServer(function(connect){ //connects req/res in http
        var log = fs.createWriteStream('Logmsgs.txt');
        console.log('connection established');
        connect.on('end', function(){
            console.log('connection terminated');
        });
    connect.write('defult msg');
    connect.pipe(connect).pipe(log);
    
    
});

server.listen(process.env.PORT, function(){
    console.log('server listening at' , process.env.PORT);
})
