const express = require('express');
var router = express.Router();
require('dotenv').config();
const { Pool } = require("pg");

const pool = new Pool({
    connectionString:process.env.ACCESS_KEY,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  const xvc = {
    "message": "the required data does not exist",
    "details": "currently limit has set to 1000 results only !",
    "description": "The reference data does not exist.",
    "code": 404,
    "http_response": {
       "message": "We could not find the resource you requested.",
        "code": 404
     }
  };
  

router.get('/:id', function(req, res, next) {

        if (req.params.id <= 1000) {
          pool.query(
            `SELECT * FROM tuts WHERE id <= ${req.params.id};`,
            (err, results) => {
              return res.status(200).send(results.rows);
            });
        
        } else {
          res.status(404).send(xvc);
        }
});
  
module.exports = router;
  