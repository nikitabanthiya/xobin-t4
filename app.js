var express =require("express");
var app =new express();
var http = require("http").Server(app);
var io =require("socket.io")(http);
var log =require("log");
log =new Log('debug');
var port =process.env.PORT || 3000;

app.use(express.static(_dirname+"/public"));
app.get('',function(res,req){
  res.redirect('index.html');
});
io.on('connection',function(socket){
  socket.on('stream',function(image){
    socket.broadcast.emit('stream',image);
  });
});
app.listen(port,function(){
  log.info('Error');
})
