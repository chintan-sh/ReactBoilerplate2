/**
 * Created by chintan on 5/30/17.
 */
var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000; // making change for heroku as it decides the port

app.use( function(req, res, next){
    if(req.headers['x-forwarded-proto'] === 'https'){
        res.redirect("http://" + req.hostname + req.url);
    }else{
        next();
    }
});

app.use(express.static('./'));

app.listen(PORT,function(){
    console.log('Server is up and running on :' + PORT)
});