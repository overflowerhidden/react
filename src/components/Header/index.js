import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Axios from 'axios';
import Util from "../../utils/utils"; //导入公共机制
import './index.less';

export default class Header extends Component {
  state = {};
  componentDidMount(props, state) {
    this.setState({
      userName: '我是大魔王'
    })
    setInterval(this.getDate, 1000);
    this.getDate();
    this.getWeather();
  }

  /**
   * 获取时间
   */
  getDate = () => {
    let sysTime = Util.formateDate(new Date().getTime());
    this.setState({
      sysTime
    });
  }


  /**
   *  https://apip.weatherdt.com/plugin/data?key=qjz95FbRaX&lang=zh&location=101290101  中国天气网数据接口 昆明
   */
  getWeather = () => {
    Axios.get('https://apip.weatherdt.com/plugin/data?key=qjz95FbRaX&lang=zh&location=101290101')
      .then((response) => {
        let weather = response.data.now.txt;
        this.setState({
          weather
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { menuName, menuType } = this.props;
    return (
      <div className="header">
        <Row className="header-top">
          {
            menuType ?
              <Col span={6} className="logo">
                <img src="/assets/logo-ant.svg" alt="" />
                <span>IMooc 通用管理系统</span>
              </Col> : ''
          }
          <Col span={menuType ? 18 : 24}>
            <span>欢迎, {this.state.userName} </span>
            <span>退出</span>
          </Col>
        </Row>
        {
          menuType ? '' :
            <Row className="breadcrumb">
              <Col span={4} className="breadcrumb-title">
                首页
             </Col>
              <Col span={20} className="weather">
                <span className="date">{this.state.sysTime}</span>
                <span className="weather-detail">
                  {this.state.weather}
                </span>
              </Col>
            </Row>
        }
      </div>
    );
  }
}