/* 
    Home Page

    Should not require log-in should show a search bar and all competitions
    sorted by latest and nearest the User.

    Clicking on the competition gives the details and an option to enter the Competition.

    Able to navigate to other pages from the nav bar or other UI
*/
import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function Home() {
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
            Learn React
          </a>
        </header>
      </div>
    );
}

export default Home;