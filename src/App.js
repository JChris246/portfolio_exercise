import './assets/output.css'
// import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"

import Home from './screens/Home'
import About from './screens/About'

const App = () => {
  return (
    <Router>
        <div>
          <nav>
            <ul className="navbar">
              <li className="navlink"><Link to="/">Home</Link></li>
              <li className="navlink"><Link to="/about">About</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
