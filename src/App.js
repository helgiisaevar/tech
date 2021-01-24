import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Q1 from './pages/q1'
import { SidebarData } from '../src/components/SidebarData'
import About from './pages/about'

function App() {
  return (
    <div className="App">
      <div className="content">
        <Router>
          <Switch>
            {SidebarData.map((v) => (
              <Route
                key={v.id}
                path={`/${v.id}`}
                exact
                render={(props) => <Q1 {...props} SidebarData={v} />}
              />
            ))}
            <Route path="/" component={About} />
          </Switch>
        </Router>
      </div>

      <div className="small-screen">
        <p>
          Due to time restrictions this website is unfortunately not responsive
        </p>
        <p>Please open this site on a larger screen</p>
      </div>
    </div>
  )
}

export default App
