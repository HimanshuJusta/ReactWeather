var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(function(req, resp, next){
    if(req.headers['x-forwarded-proto'] === 'https'){
      resp.redirect('http://' + req.hostname + req.url);
    }else{
      next();
    }
})


app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express sever is up on port '+PORT);
});
