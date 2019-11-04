import React from 'react';
import './App.css';
// import Article from '../article/Article';
import Article from 'components/article/Article';
import Home from 'components/home/Home';

import theme from 'theme/Theme';
import { ThemeProvider } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Header */}
      <Home></Home>
      {/* Footer */}
    </ThemeProvider>
  );
}

export default App;
