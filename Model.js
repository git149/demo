// //数据模型
// const mongoose = require('mongoose')
// let UserSchema = new mongoose.Schema({
//     name: { type: String, required: true }, 
//     Gender: { type: String, required: true }, 
//     phone: { type: String, required: true },
//     mail:{ type: String,required:true},
//     address:{ type: String,required:true},
//     time:{ type: String,required:true}
// });
// //  将schema转化为数据模型 
// let user = mongoose.model('UserAdmins', UserSchema);
// module.exports = user
var express = require('express');
var router = express.Router();
var mysql=require('mysql'); 
  let connection=mysql.createConnection({
          user:"root",
          password:"1234",
          database:"01"
      }); 
/* GET home page. */

module.exports=router;