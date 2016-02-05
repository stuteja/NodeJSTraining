var fs = require('fs');

if(fs.existsSync('temp')) {
    console.log('Dir exists');
    //fs.rmdirSync('temp');
    
    if(fs.existsSync('temp/newText.txt')){
        fs.unlinkSync('temp/newText.txt');
    }
    
    fs.rmdirSync('temp');
}

fs.mkdir('temp', function(err){
  
  fs.exists('temp',function(exists){
      if(exists){
          process.chdir('temp');
          fs.writeFile('test.txt','this is some data for file',function(){
            fs.rename('test.txt','newTest.txt',function(){
                fs.stat('newTest.txt',function(err,stats){
                    console.log('size:' +stats.size + 'bytes');
                    fs.readFile('newTest.txt',function(err,data){
                        console.log('contents:' +data );
                    });
                    
                });
            }) ; 
          });
      }
  });
});