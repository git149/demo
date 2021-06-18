var express = require('express');
var router = express.Router();
router.get('/',(req, res)=> {
    res.render('add',{d:{id:"",名称:"",工资:"",公司名:""}});
  });
  module.exports=router;









  