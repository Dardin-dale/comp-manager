/* 
  App Sets up all of the pages and has the default Header/Footer
*/

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';
//import Example from './Pages/Example';
import Home from './Pages/Home';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: props.lang
    }
  }

  
  

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

const mapStateToProps = function(state) {
  return {
    lang: state.i18n.i18nData,
  }
}

export default connect(mapStateToProps)(App);
