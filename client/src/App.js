import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import "bootstrap"
import Navbar from './components/Navbar'
import Homescreen from './screens/Homescreen'
import Cartscreen from './screens/Cartscreen'
import Loginscreen from './screens/Loginscreen'
import Registerscreen from './screens/Registerscreen'
import Orderscreen from './screens/Orderscreen'
import Adminscreen from './screens/Admin/Adminscreen'

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <BrowserRouter>
          <Route path="/" exact component={Homescreen} />
          <Route path="/cart" exact component={Cartscreen} />
          <Route path="/login" exact component={Loginscreen} />
          <Route path="/register" exact component={Registerscreen} />
          <Route path="/myorders" exact component={Orderscreen} />
          <Route path="/admin" component={Adminscreen} />

        </BrowserRouter>
      </div>
    </div>
  )
}

export default App