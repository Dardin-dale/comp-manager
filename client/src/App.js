import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          {/* <Route path='/list' component={List}/> */}
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}



export default App;
