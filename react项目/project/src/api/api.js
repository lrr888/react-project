import ajax from './request';

export const Wang = ()=>{
  return ajax({
    url:'/users/list',
    method:'get'
  })
}
// export const Wang = (params)=>{
//   return ajax({
//     url:'/users/list',
//     method:'get',
//     params
//   })
// }

// post接口测试
// export const testPostList=(data)=>{
//   return ajax({
//     url:'/api/post_test',
//     method:'post',
//     data
//   })
// }
// // get接口测试 
// export const getLogin=(params)=>{
//   return ajax({
//     url:'/api/login',
//     method:'get',
//     params
//   })
// }
// export const getUserList=(params)=>{
//   return ajax({
//     url:'/api/task/list',
//     method:'get',
//     params
//   })
// }


