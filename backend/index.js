var app = require('express')();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/chat', function(req, res){
  res.send("sagar was here");
});

app.get('/', function(req, res){
  res.send("sagar was here");
  });

  app.post('/name', function(req, res){
      var body = res.body;
      console.log(req.body);
  });

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });

io.on('connection', function(socket){
  console.log('a user connected');
});

server.listen(5000, function(){
  console.log('listening on *:3000');
});