/* 
    Home Page

    Should not require log-in should show a search bar and all competitions
    sorted by latest and nearest the User.

    Clicking on the competition gives the details and an option to enter the Competition.

    Able to navigate to other pages from the nav bar or other UI
*/
import {React, Component} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage } from '../services/localizationService';
import { Component } from 'react';
import { TextField } from '@material-ui/core';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lang: useSelector(state => state.i18n.i18nData)
        }
    }
    
  



    render() {
        return(
            <div className="Home">
                <TextField id="filled-search" label="Search field" type="search" variant="filled" />
                <TextField
                id="filled-helperText"
                label="Helper text"
                defaultValue="Default Value"
                helperText="Some important text"
                variant="filled"
                />
            </div>
        );     
    }
}

export default Home;