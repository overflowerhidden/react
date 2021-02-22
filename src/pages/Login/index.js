import React, { Component } from 'react'
import Footer from '../../components/Footer'
import './index.less'

export default class Login extends Component {
  state = {};

  render() {
    return (
      <div className="login-page">
        <div className="login-header">
          <div className="logo">
            <img src="/assets/logo-ant.svg" alt="慕课后台管理系统" />
            React全家桶+AntD 共享经济热门项目后台管理系统
          </div>
        </div>
        <div className="login-content-wrap">
          <div className="login-content">
            <div className="word">共享出行 <br />引领城市新经济</div>
            <div className="login-box">
              <div className="error-msg-wrap">
                <div
                  className={this.state.errorMsg ? "show" : ""}>
                  {this.state.errorMsg}
                </div>
              </div>
              <div className="title">慕课欢迎你</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}