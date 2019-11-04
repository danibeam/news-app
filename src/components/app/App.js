import React from 'react';
import './App.css';
// import Article from '../article/Article';
import Article from 'components/article/Article';

import theme from 'theme/Theme';
import { ThemeProvider } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button variant="contained">
            Default
          </Button>
        </header>
      </div> */}
      <Article 
        title="Test"
        content="A lot of things..."
      ></Article>
    </ThemeProvider>
  );
}

export default App;
