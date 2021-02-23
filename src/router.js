import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import App from './App'
import Login from './pages/Login'
import Admin from './admin'
import Buttons from './pages/ui/Buttons'
import Modals from './pages/ui/Modals'
import Loadings from './pages/ui/Loadings'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
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
                  <Route path="/admin/ui/modals" component={Modals} />
                  <Route path="/admin/ui/loadings" component={Loadings} />
                  <Route path="/admin/ui/notification" component={Notice} />
                  <Route path="/admin/ui/messages" component={Messages} />
                  <Route path="/admin/ui/tabs" component={Tabs} />
                  <Route path="/admin/ui/gallery" component={Gallery} />
                  <Route path="/admin/ui/carousel" component={Carousel} />
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