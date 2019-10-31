import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from '@material-ui/core/Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: blue
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button>
            Ok
          </Button>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
