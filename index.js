// const { Pool } = require("pg");
// const express = require("express");
// const app = express();

// const port = process.env.PORT || 8080;

// const xvc = {
//   "message": "the required data does not exist",
//   "details": "currently limit has set to 1000 results only !",
//   "description": "The reference data does not exist.",
//   "code": 404,
//   "http_response": {
//      "message": "We could not find the resource you requested.",
//       "code": 404
//    }
// };

// const zvc ={
//   "information": [
//       {
//           "status": 200,
//           "source": {
//               "pointer": "https://akshpareek.herokuapp.com/"
//           },
//           "title": "Please peovide any number after api url to show some results",
//           "detail": "not an error",
//           "author" : "Madhusudan pareek"
//       }
//   ]
// };

// const pool = new Pool({
//   connectionString:
//     "postgres://qnkdasrpkuwllf:48fedd74dff7d1c8e8133dd44e373ac9bfd04bc028c575bf5ed541a62462c65e@ec2-44-193-255-156.compute-1.amazonaws.com:5432/db5akqd660sgnb",
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// app.use(express.json());

// app.get("/", (req, res) => {
//   if (res.method === "GET") {
//     return res.send(zvc);
//   }
// });

// app.get("/:id", (req, res) => {
//   if (req.method === "GET") {
//     if (req.params.id <= 1000) {
//       pool.query(
//         `SELECT * FROM tuts WHERE id <= ${req.params.id};`,
//         (err, results) => {
//           return res.send(results.rows);
//         }
//       );
//     } else {
//       res.status(404).send(xvc);
//     }
//   } else {
//     res.status(404).send("Invalid Request !");
//   }
// });

// module.exports = app

// app.listen(port, ()=>{
//   console.log(`Running.. at ${port}`);
// });

const express = require("express");
const sweetHome = require('./routes/sweetHome')
const userRandom = require('./routes/userRandom');
const userName = require('./routes/userName');

const port = process.env.PORT || 8080;
const app = express();

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