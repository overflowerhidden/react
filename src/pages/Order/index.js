import React, { Component } from "react";
import { Button } from 'antd'

class Order extends Component {
  openOrderDetail = () => {
    window.open(`/#/common/order/detail/1`, '_blank')
  }

  render() {
    return (
      <div style={{ width: '100%', textAlign: 'center', fontSize: '20px' }}>
        <div>this is Order page !!!</div>
        <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
      </div>
    );
  }
}

export default Order;
