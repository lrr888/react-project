const { exec } = require('../db/index');
// mysql语句
// 检测是否连接到数据库
const selectInsurance = () => {
  const sql = `select * from overtime`;
  return exec(sql).then(data => {
    console.log(data,'index====data')
    return data || {}
  })
}
module.exports ={
  selectInsurance
}