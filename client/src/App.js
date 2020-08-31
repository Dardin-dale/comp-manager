/* 
  App Sets up all of the pages and has the default Header/Footer
*/

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';
//import Example from './Pages/Example';
import Header from './Components/Header';
import SideNav from './Components/SideNav';
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
      <Grid container direction="column" spacing={2}>
        <Grid item>
            <Header />
        </Grid>
        <Grid container
          direction="row"
        >
          <Grid item>
            <SideNav /> 
          </Grid>
          <Grid item>
            <Switch>
              <Route exact path='/' component={Home}/>
              {/* <Route path='/list' component={List}/> */}
            </Switch>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Footer lang={this.state.lang} />
        </Grid>
      </Grid>
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
