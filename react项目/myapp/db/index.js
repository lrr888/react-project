const mysql = require('mysql');
const con = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'2000051720000811',
  database:'lrr'
})
// 连接数据库
//链接数据库
con.connect()

console.log("数据连接成功")
//查询数据库
// con.query('select * from overtime',(err,data)=>{
//   console.log(data,"data")
// })
function exec(sql){
  return new Promise((resolve,reject) => {
    con.query(sql,(err,data)=>{
      if(err){
        reject(err)
        return;
      }
      resolve(data)
    })
  })
}

module.exports={
  exec
}