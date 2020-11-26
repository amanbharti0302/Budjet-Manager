const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const cors = require('cors');

const reqdata = require('./schema/reqdataschema');
const keydata = require('./schema/keyschema');

app.use(cors());
app.options('*', cors());

app.use(express.json());
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static("public"));

app.post('/reqdata',async (req,res)=>{
  try{
    const data =await reqdata.create({data:req.body});
    //console.log(data);
    res.send('data recieved');
  }
  catch(err){
    res.send('ERROR');
  }
})

app.post('/keydata',async (req,res)=>{
  try{
    const data =await keydata.create({data:req.body});
    //console.log(data);
    res.send('data recieved');
  }
  catch(err){
    res.send('ERROR');
  }
})

app.all('*', (req, res, next) => {res.send('<html><head><title>500 Internal Server Error</title></head><body bgcolor="white"><center><h1>500 Internal Server Error</h1></center><hr><center>covid19pr.com <br>website in development mode plase contact :7250720774 (aman bharti)</center></body></html>');});

module.exports = app;