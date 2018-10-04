// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get('/api/timestamp/:date_string?',(req, res)=>{
  var temp = req.params.date_string;
  var ourDate;
  if(temp == undefined){
    ourDate = new Date();
    res.json({unix:ourDate.getTime(), utc: ourDate.toUTCString()});
  }else
    
    if(temp.indexOf('-') == -1){
    
    ourDate = new Date(Number(temp));
    
    }else{
  
    ourDate = new Date(temp);
    }
    console.log('given:'+temp);
    console.log('date:'+ourDate);
    if(ourDate== 'Invalid Date'){
    res.json({error:'Invalid Date'});
    
    }else{
    res.json({unix:ourDate.getTime(), utc: ourDate.toUTCString()});
    }
  
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
