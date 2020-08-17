import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Example from './Pages/Example';

import './App.css';

class App extends Component {

  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Example}/>
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
