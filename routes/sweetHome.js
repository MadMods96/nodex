const express = require('express');
var router = express.Router();


const zvc ={
    "information": [
        {
            "status": 200,
            "source": {
                "pointer": "https://akshpareek.herokuapp.com/"
            },
            "title": "Please peovide any number after api /id url to show some results",
            "detail": "not an error",
            "author" : "Madhusudan pareek"
        }
    ]
  };
  



router.get('/', function(req, res, next) {
    return res.send(zvc)
});

module.exports = router;