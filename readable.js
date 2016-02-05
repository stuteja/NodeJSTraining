var fs = require("fs");

var data = "";
var i = 0;
var readable = fs.createReadStream('Data.txt');

readable.on('readable', function() {
    console.log('file readable?' + readable.read());
});

readable.on('data', function(chunk){
    console.log('insidedata');
    i++;
    data += chunk;
    console.log('%d bytes', chunk.length);
    
    readable.pause();
    
    setTimeout(function(){
       
       console.log('now resume');
       readable.resume();
        
    },2000);
    
    //console.log(data.toString());
})

readable.on('end', function(chunk){
    console.log(data);
    
    
})