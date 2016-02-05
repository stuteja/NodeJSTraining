//var domain = require('domain'),
    //fs = require('fs'),
    //d1 = domain.create();
    
    // d1.on('error',function(){
    //   console.log('inside error handler'); 
    // });
     process.on('uncaughtException', function(){
        console.log('Swallows th error silently but bad practice');
    });
    //d1.run(function(){
        fs.readFile('AnyFile.txt', function(err,data){
           // try {
                if(err){
                    throw err;
                }
           // }
        });
   // });
    
   // console.log('see ,more text');
    
   