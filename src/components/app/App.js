import React, { useState, useEffect } from 'react';
import './App.css';
import Home from 'components/home/Home';
import Header from 'components/header/Header';

import themeObject from 'theme/Theme';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, FormControlLabel, Switch } from '@material-ui/core';
// import Button from '@material-ui/core/Button';

const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObject)

  const { palette: { type }} = theme;

  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        // ...theme.palette,
        secondary: { main: '#FE4225'},
        type: type === 'light' ? 'dark' : 'light'
      }
    }
    setTheme(updatedTheme)
  }

  return [theme, toggleDarkMode]
}

function App() {

  const [theme, toggleDarkMode] = useDarkMode();

  const themeConfig = createMuiTheme(theme);

  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline />
      {/* Header */}
      {/* <FormControlLabel
        control={<Switch onClick={toggleDarkMode} aria-label="night mode switch" />}
      /> */}
      <Header />
      <Home></Home>
      {/* Footer */}
    </ThemeProvider>
  );
}

export default App;
