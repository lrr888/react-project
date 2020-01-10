import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import RouterView from '@/router/index'
import 'antd-mobile/dist/antd-mobile.css';
import { Menu, Icon, Button } from 'antd';
import 'antd/dist/antd.css'; 
import FooterBar from '@/components/FooterBar.js'
const { SubMenu } = Menu;
export default class Home extends Component {
  state = {
    collapsed: false,
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div className="menu">
        
        {/* <NavLink to="/home/huo">货款管理</NavLink>
        <NavLink to="/home/zhuan">转单订单</NavLink>
        <NavLink to="/home/bao">保险订单</NavLink>
        <RouterView router={this.props.router}/> */}
        
      <div style={{ width: 256,height:500 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          style={{ width: 256,height:500 }}
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            {/* <Icon type="pie-chart" /> */}
            <span><FooterBar/></span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>订单管理</span>
              </span>
            }
          >
            <Menu.Item key="5"><NavLink to="/home/huo">货款管理</NavLink></Menu.Item>
            <Menu.Item key="6"><NavLink to="/home/zhuan">转单订单</NavLink></Menu.Item>
            <Menu.Item key="7"><NavLink to="/home/bao">保险订单</NavLink></Menu.Item>

          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>财务管理</span>
              </span>
            }
          >
          </SubMenu>
        </Menu>
      </div>
      <div className="right">
      <RouterView router={this.props.router}/>
      </div>
      </div>
    )
  }
}
