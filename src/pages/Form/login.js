import React, { Component } from 'react'

import { Card, Form, Input, Button, Checkbox } from 'antd'

export default class FormLogin extends Component {

  layout = () => {
    return {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 }
    }
  };

  tailLayout = () => {
    return {
      offset: 8,
      span: 16,
    }
  };

  onFinish = (values) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return (
      <div className="container">
        <Card title="登录行内表单">
          <Form layout="inline">
            <Form.Item>
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="请输入密码" />
            </Form.Item>
            <Form.Item>
              <Button type="primary">登录</Button>
            </Form.Item>
          </Form>
        </Card>

        <Card title="登录水平表单" style={{ marginTop: 10 }}>
          <Form
            {...this.layout()}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            layout="horizontal"
            style={{ width: 300 }}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: '用户名不能为空!' }]}
            >
              <Input placeholder="请输入用户名" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password placeholder="请输入密码" />
            </Form.Item>

            <Form.Item {...this.tailLayout()} name="remember" valuePropName="checked">
              <Checkbox>记住密码</Checkbox>
            </Form.Item>

            <Form.Item {...this.tailLayout()}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}