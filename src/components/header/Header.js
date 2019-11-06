import React, { useContext } from 'react';
import { Context } from "stores/mode";

import './Header.css';
import Logo from 'assets/logo';
// import logo from 'logo.svg';

import NightModeToggle from './nightMode/NightModeToggle';

import { AppBar, Toolbar } from '@material-ui/core';

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

    // Take global context
    const { store, dispatch } = useContext(Context)

    const handleChangeMode = () => {
        dispatch({ type: "changeMode" })
    }

    // Logo
    const SVG = () => 
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path d="some path here" fill="#000" d="M 2.56635 12.9241C 0.708307 9.55549 0 6.83983 0 5.00558C 0 3.17134 0.450658 2.64526 0.907953 2.22025C 1.36525 1.79524 3.42732 0.523908 3.77867 0.286808C 4.13002 0.0497085 5.47099 -0.41107 6.31193 0.798636C 7.15287 2.00834 8.73646 4.43718 9.82825 6.05069C 11.5415 8.33611 10.1766 9.33937 9.73572 9.94069C 8.92447 11.0472 8.45734 11.3201 8.45734 12.6788C 8.45734 14.0375 12.2545 17.8976 13.1625 18.8487C 14.0635 19.7926 17.8471 23.1094 19.0195 23.2868C 20.2002 23.4654 21.7807 22.2154 22.1168 21.8985C 23.8263 20.586 24.7912 21.581 25.5787 22.0136C 26.3661 22.4461 29.9239 24.663 31.0264 25.4103C 32.0641 26.1576 31.9992 27.3125 31.9992 27.3125C 31.9992 27.3125 29.859 30.7092 29.5996 31.1168C 29.2753 31.5924 28.4971 32 26.746 32C 24.995 32 23.1241 31.6802 18.6777 29.2349C 15.0396 27.234 11.5714 24.1009 9.75551 22.2666C 7.87475 20.4324 4.68876 16.772 2.56635 12.9241Z" />
        </svg>;
    
    return (
        <AppBar position="sticky" color="default">
            <Toolbar>
                <div style={classes.logoHorizontallyCenter}>
                    <Logo width="3em" height="3em" fill="secondary" viewBox="0 0 316.812 316.811" />
                    {/* <svg src={logo} style={classes.logo} alt="logo" /> */}
                </div>
                <NightModeToggle changeMode={handleChangeMode} />
            </Toolbar>
        </AppBar>
    )

};

export default Header;