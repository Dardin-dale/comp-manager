import React from 'react';
import { IconButton, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './index.css';

function SearchBar (props) {
    const lang = props.lang;
    return(
        <div className="searchRoot">
            <TextField 
                className="searchInput"
                // type="search"
                placeholder={lang.defaultValue}
                inputProps={{'aria-label': lang.label}}
            />
            <IconButton type="submit" className="searchBtn" aria-label={lang.label}>
                <SearchIcon />
            </IconButton>
        </div>
    ); 
}

export default SearchBar;