import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import history from "./history"
import "./App.scss"

import { Apply, Home, Schedule, StarterPacks } from "app/views"

import { NavigationBar, Footer } from "app/components"

function App() {
    return (
        <div className="App">
            <NavigationBar history={history}></NavigationBar>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/apply">
                    <Apply />
                </Route>
                 <Route exact path="/schedule" component={Schedule} />
                 <Route exact path="/starter-packs" component={StarterPacks} />

                {/*<Route path='/github' component={() => {*/}
                {/*  window.location.href = 'https://education.github.com/discount_requests/student_application?utm_source=2020-11-13-ZotHacks2020';*/}
                {/*  return null;*/}
                {/*}}/>*/}
                <Route><Redirect to="/" /></Route> {/* // redirect to Home if page doesn't exist*/}
            </Switch>
            <Footer/>
        </div>
    )
}

export default App