var express = require('express');
var router = express.Router();
const { selectInsurance } = require('../controller/index')
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/list',  (req,res)=>{
  return selectInsurance().then(data=>{
    console.log(data,'users---data')
    res.send({
      data
    })
  })
})
// router.get('/list',function (req,res,next){
//   const opt=req.body
//   return selectInsurance({...opt}).then(data=>{
//     console.log(data,'users---data')
//     res.send({
//       opt
//     })
//   })
// })
module.exports = router;
