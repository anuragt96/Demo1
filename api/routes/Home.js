var express = require('express');
var router = express.Router();

router.get("/Hello", function(req,res){

    res.send("Hello world..!!")

})

module.exports = router; 