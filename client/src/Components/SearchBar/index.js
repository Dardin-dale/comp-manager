import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function SearchBar (props) {
    const lang = props.lang;
    return(
        <div className="search">
            <TextField 
            id="filled-search" 
            label={lang.label} 
            type="search" 
            startadornment={<InputAdornment position="start">{SearchIcon}</InputAdornment>}
            variant="filled" 
            />
            {/* <TextField
            id="filled-helperText"
            label={lang.label}
            defaultValue={lang.defaultValue}
            
            helperText={lang.helperText}
            variant="filled"
            /> */}
        </div>
    );  
}

export default SearchBar;