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
router.get('/',(req, res)=>{ 
   connection.query("select *from book",function(err,d,fields){
    data=d;
           res.render('index',{detail:d});   
    // res.render('index');
        }); 
   
  
});
//新增
router.post('/a',(req, res)=> {
   connection.query('INSERT INTO book(id,name,salary,company) VALUES (?,?,?,?)',[req.body.id,req.body.name,req.body.salary,req.body.company],function(err,b,fields){
    if(err!= null){
      console.log(err);
    }if (err) {
      res.end('新增失败:' + err);
  } else {
      res.redirect('/index1');
  }
})
})


// //删除
//删除
router.post('/b',(req,res)=>{
 
  connection.query("delete from book where name=?",[req.body.name],function(err,b,fields){
res.redirect('/index1'); 
  

  })
})
//查询
router.post('/c',(req,res)=>{
 let sql =`select *from book where id like '${req.body.id}' or name like '${req.body.name}' or salary like '${req.body.salary}' or company like '${req.body.company}'`
  connection.query(sql,function(err,b,fields){
res.render('index',{detail:b}); 
  

  })
})


// //修改
// router.get('/upd/index2',(req, res)=> {
//   //   let sql = 'select *from book where id =' + res.param.id
//       res.render('upd',{d:{z_id:'',id:'',名称:'',工资:'',公司名:''}});
//   });
  
// router.post('/h',(req,res)=>{
//   let sql = `update user set  name="${req.body.name}",salary="${req.body.salary}",company="${req.body.company}" where id= ${req.body.id}`;
//   connection.query("update book set id=?,  name=?,salary=?,company=? where z_id=?",[req.body.id,req.body.name,req.body.salary,req.body.company,req.body.z_id],function(err,b,fields){
// res.redirect('/index1'); 
//  })
// })


module.exports=router;