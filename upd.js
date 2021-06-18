var express = require('express');
var router = express.Router();
var mysql=require('mysql'); 
var data=new Array();
let connection=mysql.createConnection({
            user:"root",
            password:"1234",
            database:"01" 
        });

  /* GET home page. */


  
router.get('/upd:id',(req, res)=>{ 
  console.log("wwwwwwwwwww")
  console.log(req.params.id)
  let sql = 'select *from book where id =' + req.params.id
  console.log(sql)
   connection.query(sql,function(err,d,fields){
    console.log(err)
    data=d;
    console.log("data"+data)
           res.render('upd',{detail:d});   
    // res.render('index');
        }); 
   
});

// //修改
router.post('/h',(req,res)=>{
  connection.query("update book set id=?, name=?,salary=?,company=? where z_id=?",[req.body.id,req.body.name,req.body.salary,req.body.company,req.body.z_id],function(err,d,fields){
    console.log(err)
    res.redirect('/index1'); 
    }) 
})


  module.exports=router;

