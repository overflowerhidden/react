import React, { Component } from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import MenuConfig from '../../config/menuConfig'
import './index.less'

const { SubMenu } = Menu;

export default class NavLeft extends Component {

  init = () => {
    return this.renderMenu(MenuConfig);
  }

  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }

      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={'/admin'+item.key}>{item.title}</NavLink>
        </Menu.Item>
      )
    })
  }

  render() {

    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Antd</h1>
        </div>
        <Menu theme="dark">
          {this.init()}
        </Menu>
      </div>
    )
  }
}