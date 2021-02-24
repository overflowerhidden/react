import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import App from './App'
import Login from './pages/Login'
import Admin from './admin'
import Home from './pages/Home'
import Buttons from './pages/ui/Buttons'
import Modals from './pages/ui/Modals'
import Loadings from './pages/ui/Loadings'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
import Order from './pages/Order'
import FormLogin from './pages/Form/login'
import FormRegister from './pages/Form/register'
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
            <Route path="/" render={() =>
              <Admin>
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/ui/buttons" component={Buttons} />
                  <Route path="/ui/modals" component={Modals} />
                  <Route path="/ui/loadings" component={Loadings} />
                  <Route path="/ui/notification" component={Notice} />
                  <Route path="/ui/messages" component={Messages} />
                  <Route path="/ui/tabs" component={Tabs} />
                  <Route path="/ui/gallery" component={Gallery} />
                  <Route path="/ui/carousel" component={Carousel} />
                  <Route path="/form/login" component={FormLogin} />
                  <Route path="/form/reg" component={FormRegister} />
                  <Route path="/order" component={Order} />
                  <Redirect to="/home" />
                  {/* <Route component={NoPage} /> */}
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