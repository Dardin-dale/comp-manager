/* 
    Home Page

    Should not require log-in should show a search bar and all competitions
    sorted by latest and nearest the User.

    Clicking on the competition gives the details and an option to enter the Competition.

    Able to navigate to other pages from the nav bar or other UI
*/
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { changeLanguage } from '../services/localizationService';

import logo from '../logo.svg';
import '../App.css';

function Home() {
    const lang = useSelector(state => state.i18n.i18nData);
    const dispatch = useDispatch();

    const onClicked = (event) => {
      let lang = event.currentTarget.dataset.language
      dispatch(
        changeLanguage({
          lang
        })
      )
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
           {/* Learn react */}
           {lang['learnReact']}
          </a>
          <img src="https://bit.ly/2NR57Sj" alt="en" data-language="en" onClick={onClicked} />
          <img src="https://bit.ly/36C7DV5" alt="es" data-language="es" onClick={onClicked} />
        </header>
      </div>
    );
}

export default Home;