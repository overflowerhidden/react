import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import App from './App'
import Login from './pages/Login'
import Admin from './admin'
import Buttons from './pages/ui/Buttons'
import Order from './pages/Order'
import NoPage from './pages/NoPage'
import Common from './common'
import OrderDetail from './pages/Order/detail'

export default class IRouter extends Component {

  render() {
    return (
      <div className="i-router">
        <Router>
          <App>
            <Route path="/login" component={Login} />
            <Route path="/admin" render={() =>
              <Admin>
                <Switch>
                  <Route path="/admin/ui/buttons" component={Buttons} />
                  <Route path="/admin/order" component={Order} />
                  <Route component={NoPage} />
                </Switch>
              </Admin>
            } />
            <Route path="/common" render={() =>
              <Common>
                <Route path="/common/order/detail/:orderId" component={OrderDetail} />
              </Common>
            } />
          </App>
        </Router>
      </div>
    )
  }
}