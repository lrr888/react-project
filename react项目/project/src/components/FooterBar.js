import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class FooterBar extends Component {
  render() {
    return (
      <div className="foot">
      <NavLink to="/home" className="a">首页</NavLink>
        {/* <NavLink to="/about">关于</NavLink>
        <NavLink to="/come">我的</NavLink> */}
      </div>
    )
  }
}
