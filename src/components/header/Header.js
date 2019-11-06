import React, { useContext, useState } from 'react';
import { Context } from "stores/store";

import './Header.css';
import Logo from 'assets/logo';
// import logo from 'logo.svg';

import NightModeToggle from './nightMode/NightModeToggle';

import { AppBar, Toolbar } from '@material-ui/core';

const Header = ({handleMode}) => {

    const [fillColor, setFillColor] = useState("#000");
    
    const classes = {
        logo: {
        //   margin: 'auto',
        //   textAlign: 'center',
        //   width: '3em',
        //   height: '3em'
        //   maxWidth: '50%',
        //   maxHeight: '70%',
        },
        logoHorizontallyCenter: {
            position: 'absolute', 
            left: '10%', 
            top: '50%',
            transform: 'translate(-50%, -50%)'
        },
        nightModeToggle: {
            position: 'absolute',
            left: '50%',
            top:'50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    // Take global context
    const { store, dispatch } = useContext(Context)

    const handleChangeMode = () => {
        dispatch({ type: "changeMode" })
        store.mode === 'light' ? setFillColor("#fff") : setFillColor("#000");
    }
    
    return (
        <AppBar position="sticky" color="default">
            <Toolbar>
                <div style={classes.logoHorizontallyCenter}>
                    <Logo width="3em" height="3em" fill={fillColor} viewBox="0 0 316.812 316.811" style={classes.logo} />
                    {/* <svg src={logo} style={classes.logo} alt="logo" /> */}
                </div>
                <div style={classes.nightModeToggle}>
                    <NightModeToggle changeMode={handleChangeMode} />
                </div>
            </Toolbar>
        </AppBar>
    )

};

export default Header;