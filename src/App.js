import React from "react"
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"

import HomePage from "./screens/HomePage"
import SearchResults from "./screens/SearchResults"
import PlaceDetails from "./screens/PlaceDetails/PlaceDetails"

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search/:query" render={() => <SearchResults />} />
        <Route path="/place/:query" render={() => <PlaceDetails />} />
        <Redirect from="*" to="/" />
      </Switch>
    </Provider>
  </BrowserRouter>
)

export default App
