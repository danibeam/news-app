import React from 'react';
import './Header.css';
import Logo from 'assets/logo';
import logo from 'logo.svg';

import { AppBar, Toolbar, Typography, FormGroup, FormControlLabel, Switch, IconButton, SvgIcon } from '@material-ui/core';

const Header = () => {

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
        <AppBar position="sticky" color="primary">
            <Toolbar>
                <div style={classes.logoHorizontallyCenter}>
                    <img src={logo} style={classes.logo} alt="logo" />
                    {/* <Logo /> */}
                </div>
                {/* <Typography variant="h6" className="centerTitle">
                    Today's news!
                </Typography> */}
                <FormGroup className="nigthMode">
                    <FormControlLabel
                    control={<Switch aria-label="login switch" />}
                    label='Night mode'
                    />
                </FormGroup>
            </Toolbar>
        </AppBar>
    )

};

export default Header;