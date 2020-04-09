var express = require('express');
var router = express.Router();

router.get("/Page",function(req,res){

    res.send("Hello Manish Page 1")

})

module.exports = router; 