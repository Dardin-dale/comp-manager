import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Toolbar, IconButton, Typography, MenuIcon } from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import './index.css'

function DashBoard () {
    const lang = useSelector(state => state.i18n.i18nData);
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return(
        <div className="Header">
            <AppBar position="relative">
                <Toolbar className="toolbar">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Comp-Manager
                    </Typography>
                    <IconButton className="settings">
                        <Settings />
                    </IconButton>
                </Toolbar>
            </AppBar>
            
            <Drawer
                variant="permanent"
                classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
            </Drawer>
        </div>
    );


}

export default DashBoard;