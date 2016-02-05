var fs = require("fs"),
    writer = fs.createWriteStream('GenerateDataFile.txt'),
    someData=300,
    request = require("request"),
    
    res = request('http://www.google.com'),
    writer2 = fs.createWriteStream('TextResponse.html');

writer.write('Hello sample text');
writer.write(someData.toString());
writer.end('end of world');

writer.on('finish', function(){
    console.log('finished');
})


res.pipe(writer2);
res.pipe(process.stdout);