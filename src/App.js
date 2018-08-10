import React from "react"
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom"

import HomePage from "./screens/HomePage"

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
)

export default App
