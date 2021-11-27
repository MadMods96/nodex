const express = require("express");
const app = express();

const sweetHome = require('./routes/sweetHome')
const userRandom = require('./routes/userRandom');
const userName = require('./routes/userName');

const port = process.env.PORT || 8080;

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Header","Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/", sweetHome);

//request for user id vise data.

app.use("/id", userRandom);

//request for user name vise data.

app.use("/user", userName);

app.listen(port, ()=>{
  console.log(`Running.. at ${port}`);
});