/* 
  App Sets up all of the pages and has the default Header/Footer
*/

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';
//import Example from './Pages/Example';
import DashBoard from './Components/DashBoard';
// import SideNav from './Components/SideNav';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer';

import { Grid } from '@material-ui/core';

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
      <div className="root">
        <DashBoard />
        <Switch>
          <Route exact path='/' component={Home}/>
          {/* <Route path='/list' component={List}/> */}
        </Switch>  
        <Grid container direction="row">
          <Footer lang={this.state.lang} />
        </Grid>
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
