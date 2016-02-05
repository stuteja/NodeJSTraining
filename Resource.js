var util = require('util');
var EventEmmitter = require('events').EventEmitter;


function Resource(count) {
    var self = this;
    
     process.nextTick(function(){
        var cnt = 0;
        self.emit('start');//emitting start event
        var t = setInterval(function(){
        self.emit('data', ++cnt);//emitting data
        if (cnt==count) {
                self.emit('end', cnt);
                clearInterval(t);
            }
            
            
        },10);
    
        
    });
    
    
}

util.inherits(Resource,EventEmmitter);
module.exports.Resource = Resource;