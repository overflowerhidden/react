import React, { Component } from "react";
import { Card, Button, Tooltip, Radio } from "antd"
import {
  PlusOutlined, DeleteOutlined, FormOutlined, SearchOutlined, DownloadOutlined,
  PoweroffOutlined
} from '@ant-design/icons';
import './ui.less'

export default class Buttons extends Component {
  state = {
    loadings: [],
    size: 'default'
  };

  enterLoading = index => {
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings,
      };
    });
    setTimeout(() => {
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        return {
          loadings: newLoadings,
        };
      });
    }, 6000);
  };

  handleChange = (e) => {
    this.setState({
      size: e.target.value
    })
  }

  render() {
    const { loadings } = this.state;
    return (
      <div className="container">
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary">按钮</Button>
          <Button>按钮</Button>
          <Button type="dashed">按钮</Button>
          <Button type="danger">按钮</Button>
          <Button disabled>按钮</Button>
        </Card>
        <Card title="图形按钮" className="card-wrap">
          <Button icon={<PlusOutlined />}>添加</Button>
          <Button icon={<FormOutlined />}>编辑</Button>
          <Button icon={<DeleteOutlined />}>删除</Button>
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="primary" icon={<SearchOutlined />}>
            搜索
          </Button>
          <Button type="primary" icon={<DownloadOutlined />}>
            下载
          </Button>
        </Card>
        <Card title="loading按钮" className="card-wrap">
          <Button type="primary" loading>按钮</Button>
          <Button type="primary" loading size="small">按钮</Button>
          <Button type="primary" icon={<PoweroffOutlined />} loading />

          <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>按钮</Button>
          <Button type="primary" icon={<PoweroffOutlined />} loading={loadings[1]}
            onClick={() => this.enterLoading(1)}>
            按钮
          </Button>
          <Button type="primary" icon={<PoweroffOutlined />} loading={loadings[2]} onClick={() => this.enterLoading(2)} />
        </Card>

        <Card title="按钮尺寸" className="card-wrap">
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>Imooc</Button>
          <Button size={this.state.size}>Imooc</Button>
          <Button type="dashed" size={this.state.size}>Imooc</Button>
          <Button type="danger" size={this.state.size}>Imooc</Button>
        </Card>
      </div>
    );
  }
}
