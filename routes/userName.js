var express = require('express');
var router = express.Router();
var path = require('path');
require('dotenv').config();
const { Pool } = require("pg");

const pool = new Pool({
    connectionString:process.env.ACCESS_KEY,
    ssl: {
      rejectUnauthorized: false,
    },
  });


/* GET home page. */
router.get('/:name', function(req, res, next) {
    if (req.method === "GET") {
        pool.query(
          `SELECT * FROM tuts WHERE First_name = '${req.params.name}';`,
          (err, results) => {
            if(results.rowCount === 0){  
              var bold = Math.floor(Math.random()*100)
              pool.query(
                `SELECT * FROM tuts WHERE id = '${bold}';`,
                (err, results) => {
                  const zxc = results.rows;
                  zxc[0].first_name = req.params.name;
                  res.send(zxc);
                });
            }
          
          });
      } else {
        res.status(404).json("Invalid Request !");
      }
});

module.exports = router;





 