import React, { useState, useReducer } from 'react';
import { 
  Context, 
  initialState, 
  reducer 
} from 'stores/mode';
import './App.css';
import Home from 'components/home/Home';
import Header from 'components/header/Header';

import themeObject from 'theme/Theme';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, FormControlLabel, Switch } from '@material-ui/core';

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

  // Taking stores data
  const [store, dispatch] = useReducer(reducer, initialState);

  const [theme, toggleDarkMode] = useDarkMode();

  const themeConfig = createMuiTheme(theme);

  return (
    <Context.Provider value={{ store, dispatch }}>
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
    </Context.Provider>
  );
}

export default App;
