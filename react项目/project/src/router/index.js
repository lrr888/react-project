import {Switch,Route,Redirect} from 'react-router-dom'
import React from 'react'

const RouterView=(props)=>{
  const router=props.router.filter(val=>val.components)
  const redirectArr=props.router.filter(val=>val.redirect)
  return(
    <Switch>
      {
        router.map((item,index)=>{
          return(
            <Route key={index} path={item.path} render={props=>{
              return(
                <item.components {...props} router={item.children} />
              )
            }} />
          )
        })
      }
      {
        redirectArr.map((item,index)=>{
          return(
            <Redirect key={index} to={item.redirect} />
          )
        })
      }
    </Switch>
  )
}
export default RouterView