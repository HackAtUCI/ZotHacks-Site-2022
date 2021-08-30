import React from "react"
import { Route, Switch } from "react-router-dom"
import history from "./history"
import "./App.scss"

import { Home, Schedule, StarterPacks } from "app/views"

import { NavigationBar, Footer } from "app/components"

function App() {
  return (
    <div className="App">
      <NavigationBar history={history}></NavigationBar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/starter-packs" component={StarterPacks} />
      
        <Route path='/github' component={() => { 
          window.location.href = 'https://education.github.com/discount_requests/student_application?utm_source=2020-11-13-ZotHacks2020'; 
          return null;
        }}/>
      </Switch>
      <Footer/>
    </div>
  )
}

export default App
