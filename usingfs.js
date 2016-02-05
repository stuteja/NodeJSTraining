var fs = require('fs');

if(fs.existsSync('temp')) {
    console.log('Dir exists');
    //fs.rmdirSync('temp');
    
    if(fs.existsSync('temp/newText.txt')){
        fs.unlinkSync('temp/newText.txt');
    }
    
    fs.rmdirSync('temp');
}

fs.mkdirSync('temp');

if (fs.existsSync('temp')) {
    
    process.chdir('temp');
    fs.writeFileSync('test', 'test data');
    fs.renameSync('test.txt','newText.txt');
    //console.log('file has size:' + fs.statSync('newText.txt').size + 'bytes');
    //console.log('file contents: ' + fs.readFileSync('newText.txt').toString() + 'byte');
}