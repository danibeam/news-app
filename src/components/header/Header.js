import React, { useEffect } from 'react';
import './Header.css';
import logo from 'logo.svg';

import NightModeToggle from './nightMode/NightModeToggle';

import { AppBar, Toolbar, Typography, FormGroup, FormControlLabel, Switch } from '@material-ui/core';

const Header = ({handleMode}) => {
    
    const classes = {
        logo: {
          margin: 'auto',
          textAlign: 'center',
          width: '3em',
          height: '3em'
        //   maxWidth: '50%',
        //   maxHeight: '70%',
        },
        logoHorizontallyCenter: {
          position: 'absolute', 
          left: '50%', 
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }
    };
    
    return (
        <AppBar position="sticky" color="default">
            <Toolbar>
                <div style={classes.logoHorizontallyCenter}>
                    <img src={logo} style={classes.logo} alt="logo" />
                </div>
                {/* <Typography variant="h6" className="centerTitle">
                    Today's news!
                </Typography> */}
                <NightModeToggle />
            </Toolbar>
        </AppBar>
    )

};

export default Header;