/* 
    Home Page

    Should not require log-in should show a search bar and all competitions
    sorted by latest and nearest the User.

    Clicking on the competition gives the details and an option to enter the Competition.

    Able to navigate to other pages from the nav bar or other UI
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../Components/SearchBar';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lang: props.lang
        }
    }
    //TODO: get location/get local Competitions from Database. Otherwise get big competitions.

    //

    render() {
        return(
            <div className="Home">
                <SearchBar lang={this.state.lang.SearchBar}/>
            </div>
        );     
    }
}

const mapStateToProps = function(state) {
    return {
      lang: state.i18n.i18nData,
    }
  }
  
export default connect(mapStateToProps)(Home);
