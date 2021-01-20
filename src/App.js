import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Q1 from './pages/q1';
import {SidebarData} from '../src/components/SidebarData';
import About from './pages/about';


function App() {

  return (
    <div className='App'>
      <Router>
         <Navbar />
        <Switch>
          {
            SidebarData.map(v => 
              <Route key={v.id} path={`/${v.id}`} exact render={(props) => <Q1 {...props} SidebarData={v}/> } /> 
            )
          }
          <Route path='/about' component={About}/>
          <Route path='/' component={About}/>
        </Switch>
      </Router>
    </div>
  );
}


export default App;