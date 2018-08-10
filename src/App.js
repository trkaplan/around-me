import React from "react"
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom"

import HomePage from "./screens/HomePage"
import SearchResults from "./screens/SearchResults"

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/search/:query" render={() => <SearchResults />} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
)

export default App
