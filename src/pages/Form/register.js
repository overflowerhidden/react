import React, { Component } from 'react'
import { Card, Form, Input, Button, Radio, InputNumber, Select, Tag, Switch, DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';


const { TextArea } = Input;
const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const dateFormat = 'YYYY/MM/DD';

const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];

class FormRegister extends Component {

  formRef = React.createRef();

  onFinish = (values) => {
    console.log(values);
  };
  onReset = () => {
    this.formRef.current.resetFields();
  };

  componentDidMount() {
    this.formRef.current.setFieldsValue({
      username: 'Hello world!',
      password: '123',
      male: 1,
      age: 18,
      state: 1,
      hobby: ['gold', 'cyan'],
      merry: true,
      site: "我是小妖怪，逍遥又自在。",
      date: moment('2015/01/01'),
      time: moment('10:00:00', 'HH:mm:ss')
    });
  }

  onChange = (date, dateString) => {
    // date 就是原始的日期数值，dateString 就是我们需要的日期格式
    console.log(date, dateString);
  }

  tagRender = (props) => {
    const { label, value, closable, onClose } = props;

    return (
      <Tag color={value} closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
        {label}
      </Tag>
    );
  }
  render() {
    return (
      <div className="container">
        <Card title="注册表单">
          <Form
            {...layout}
            ref={this.formRef}
            name="control-ref"
            onFinish={this.onFinish}
            style={{ width: 600 }}
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
            >
              <Input.Password placeholder="请输入密码" />
            </Form.Item>


            <Form.Item label="性别" name="male">
              <Radio.Group>
                <Radio value={1}>男</Radio>
                <Radio value={2}>女</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="年龄" name="age">
              <InputNumber min={1} max={80} />
            </Form.Item>

            <Form.Item label="当前状态" name="state">
              <Select allowClear>
                <Option value={1}>咸🐟一条</Option>
                <Option value={2}>风华浪子</Option>
                <Option value={3}>北大才子一枚</Option>
                <Option value={4}>百度FE</Option>
                <Option value={5}>创业者</Option>
              </Select>
            </Form.Item>

            <Form.Item label="爱好" name="hobby">
              <Select
                mode="multiple"
                showArrow
                tagRender={this.tagRender}
                style={{ width: '100%' }}
                options={options}
              />
            </Form.Item>

            <Form.Item label="婚否" name="merry" valuePropName="checked">
              <Switch />
            </Form.Item>

            <Form.Item label="日期" name="date">
              <DatePicker locale={locale} format={dateFormat} onChange={this.onChange()} />
            </Form.Item>

            <Form.Item label="时间" name="time">
              <TimePicker locale={locale} onChange={this.onChange} />
            </Form.Item>

            <Form.Item label="联系地址" name="site">
              <TextArea rows={4} />
            </Form.Item>


            <Form.Item {...tailLayout}>
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

export default FormRegister