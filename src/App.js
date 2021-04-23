import React from 'react';
import Users from './Components/Users'
import Blogpost from './Components/Blogpost'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path = '/' component = {Users}></Route>
        </Switch>
        <Switch>
          <Route exact path = '/user/:id' component = {Blogpost}></Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
