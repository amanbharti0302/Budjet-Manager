const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const homerouter = require('./router/homerouter');
const protectedrouter = require('./router/protectedroutes');
const app = express();

const worlddata = require('./api/worlddata');
const statedata = require('./api/statelivedata');
const timelinedata = require('./api/timelinedata');
const districtdata = require('./api/districtlivedata');


app.use(bodyParser.urlencoded({
  extended: true
}));


app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static("public"));

app.use('/', homerouter);    //from here home router in router will control all routes
app.use('/public/', protectedrouter);



app.all('*', (req, res, next) => {
  res.send('<html><head><title>500 Internal Server Error</title></head><body bgcolor="white"><center><h1>500 Internal Server Error</h1></center><hr><center>covid19pr.com <br>website in development mode plase contact :7250720774 (aman bharti)</center></body></html>');
});


function intervalFunc() {
  timelinedata.writedata();
  console.log('updating timeline data in database');
}

function intervalFunc1() {
  worlddata.writedata();
  console.log('updating world data in database');
}

function intervalFunc2() {
  statedata.writedata();
  console.log('updating state and total data in database');
}

function intervalFunc3() {
  districtdata.writedata();
  console.log('updating state and total data in database');
}


setInterval(intervalFunc, 306137);
setInterval(intervalFunc1, 321983);
setInterval(intervalFunc2, 363184);
setInterval(intervalFunc3, 475419);

module.exports = app;