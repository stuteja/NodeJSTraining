var express= require("express");
var app = express();
var bodyParser = require ('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

var port = process.env.PORT;

app.get('/', function (req, res){
    
    //res.send('Welcome to express framework');
    res.sendFile(__dirname + '/indexexpress.html');
});


app.post('/login', function(req,res){
    var user_name = req.body.username;
    var password = req.body.password;
    
    console.log(user_name + " " + password);
    
    res.end('success');
});

app.listen(port, function(){
    console.log('running at' +port);
    
})