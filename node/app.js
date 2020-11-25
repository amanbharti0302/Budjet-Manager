const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static("public"));



app.all('*', (req, res, next) => {
  res.send('<html><head><title>500 Internal Server Error</title></head><body bgcolor="white"><center><h1>500 Internal Server Error</h1></center><hr><center>covid19pr.com <br>website in development mode plase contact :7250720774 (aman bharti)</center></body></html>');
});

module.exports = app;