var express = require('express')
var router = express.Router()

router.get('/employeelist',function(req,res,next){

    res.render('employee')
})

module.exports=router;