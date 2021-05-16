const { name } = require('ejs');
var express = require('express');
var router = express.Router();
var User=require('./bean/user');


router.post('/',(req,res)=>{
  let  user=new User(req.body.name,req.body.password);
  req.session.user=user;
  res.send("注册成功"); 
});

// name.register = function(mongoose){
// 	return function(req,res){
// 		var user = req.body.name,
// 		passwd = req.body.password;
// 		mongoose.find("user",{user:user},function(resu){
// 			//判断用户名密码，登录成功后写入cookie，session
// 			if(resu.length){
// 				if(passwd == decrypt(resu[0].passwd),secret){
// 					//登录成功
// 					req.session.user = user;
// 					req.session.isLogin = true;
// 					res.json({status: 0,msg: "登录成功."});
// 				}else {
// 					res.json({status: 1,msg: "密码错误！"});
// 				}
// 			}else {
// 				res.json({status: 1,msg: "该用户未注册，请先注册！"});
// 			}
// 		});
// 	};
// };

// name.logout = function(){
// 	return function(req,res){
// 		//清除session，cookie
// 		req.session.destroy(function(){
// 			res.clearCookie("user",{});
// 			res.cookie("isLogin","false");
// 			res.redirect("/");
// 		});
// 	};
// };

module.exports = router;