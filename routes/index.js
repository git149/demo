var express = require('express');
var router = express.Router();

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
   res.redirect('index1'); 
 }else{
   res.send("登录失败");
 }
});
module.exports = router;


// router.post('/register',function(req,res){
//   if(req.body.username && req.body.password){
//       // var user = {'username':'love'};
//       session.user = user;
//       res.redirect('/views/register');
//       res.render('register');
//   } else {
//       res.redirect('/regsiter');
//   }
// });
// router.post('/register',function(req,res){
//   session.user = null;
//   res.redirect('/register');
// });

// router.index = function(mongoose){
// 	return function(req,res){
// 		var findPattern = {user: "default"};
// 		var cookie = req.headers.cookie || "";
// 		cookie = cookie.split(";");
// 		var cookieUser = "default",
// 			sessionUser = "default";
// 		//解析cookie获取cookieUser，略去
// 		if(req.session && req.session.user){
// 			sessionUser = req.session.user;
// 		}

// 		//防止伪造cookie登录
// 		if(cookieUser == sessionUser){
// 			findPattern = {user: sessionUser};
// 		}else {
// 			res.clearCookie("user",{});
// 			res.cookie("isLogin","false");
// 		}

// 		//查询数据库逻辑，略去
// 	};
// };


