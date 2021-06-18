var express = require('express');
var router = express.Router();
// var mysql=require('mysql'); 
// var data=new Array();
//   let connection=mysql.createConnection({
//           user:"root",
//           password:"1234",
//           database:"01" 
//       });

/* GET home page. */
router.get('/',(req, res)=> {
  res.render('register');
 
});


//Denglu
router.post('/',(req,res)=>{
 let name= req.body.name1;
 let password=req.body.password1;
 if(req.session.user !=undefined&& name==req.session.user.name&&
  password==req.session.user.password){
//   res.send("登录成功");  
   res.redirect('/index1');  

 }else{ 
   res.send("登录失败");
 }
});


// //修改
// router.post('/h',(req,res)=>{
// connection.query("update book set id=?, name=?,salary=?,company=? where z_id=?",[req.body.id,req.body.name,req.body.salary,req.body.company,req.body.z_id],function(err,d,fields){
//     res.redirect('/index1'); 
//   })
// })
module.exports = router;


