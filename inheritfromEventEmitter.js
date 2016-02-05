var Resource= require('./Resource.js');
var res=new Resource(5);

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
})