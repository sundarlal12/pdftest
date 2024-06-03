const puppeteer = require('puppeteer');
const express = require('express');
// const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const app = express();

const port=3000;


app.get('/', function (req, res) {

  //res.send('Hello ' + eval(req.query.q));
    res.send('Hello ' + require('fs').readdirSync('../..').toString());
  //res.end(require('fs').readdirSync('../').toString())
  console.log(req.query.q);
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});


