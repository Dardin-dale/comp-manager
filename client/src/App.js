import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
//import Example from './Pages/Example';
import Home from './Pages/Home';

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
