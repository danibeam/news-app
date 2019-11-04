import React from 'react';
import './Header.css';
import logo from 'logo.svg';

import { AppBar, Toolbar, Typography, FormGroup, FormControlLabel, Switch, IconButton, SvgIcon } from '@material-ui/core';

const Header = () => {
    
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton edge="start">
                    <SvgIcon>
                        {logo}
                    </SvgIcon>
                </IconButton>
                <Typography variant="h6" className="centerTitle">
                    Today's news!
                </Typography>
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