var EventEmmitter = require('events').EventEmitter;

var getResource = function(count){
    var e = new EventEmmitter();
    
    process.nextTick(function(){
        var cnt = 0;
        e.emit('start');//emitting start event
        var t= setInterval(function(){
        e.emit('data', ++cnt);//emitting data
        if (cnt==count) {
                e.emit('end', cnt);
                clearInterval(t);
            }
            
        },10);
    
        
    });
    
    return e;
}

var res = getResource(5); // returns object of eventemmitter

res.on('data', function(currData){
    console.log('received' +currData);
});

res.on('error', function(err){
    console.log('error', +err);
    
});

res.on('start', function(currData){
    console.log('started');
});
res.on('end', function(currData){
    console.log('final count', +currData);
});