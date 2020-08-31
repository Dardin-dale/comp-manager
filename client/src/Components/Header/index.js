import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import './index.css'

function Header () {
    const lang = useSelector(state => state.i18n.i18nData);

    return(
        <div className="Header">
            <AppBar position="relative">
                <Toolbar className="toolbar">
                    <Typography variant="h6">
                        Comp-Manager
                    </Typography>
                    <IconButton className="settings">
                        <Settings />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );


}

export default Header;