/* eslint-disable no-unused-vars */
import React, {useState, useReducer} from 'react'
import {Context, initialState, reducer} from 'stores/store'
import './App.css'
import Home from 'components/home/Home'
import Header from 'components/header/Header'

import themeObject from 'theme/Theme'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'

const useDarkMode = mode => {
  const [theme, setTheme] = useState(themeObject)

  const {
    palette: {type},
  } = theme

  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        // ...theme.palette,
        secondary: {main: '#FE4225'},
        // type: type === 'light' ? 'dark' : 'light'
        type: mode,
      },
    }
    setTheme(updatedTheme)
  }

  return [theme, toggleDarkMode]
}

function App() {
  // Taking stores data
  const [store, dispatch] = useReducer(reducer, initialState)

  window.onbeforeunload = () => {
    // TODO include here future variables created in store
    if (store.mode && store.country) {
      localStorage.setItem('mode', store.mode)
      localStorage.setItem('country-code', store.country.code)
      localStorage.setItem('country-label', store.country.label)
    }
  }

  const [theme, toggleDarkMode] = useDarkMode(store.mode)

  const themeConfig = createMuiTheme(theme)

  const testTheme = createMuiTheme({
    ...themeObject,
    palette: {
      // ...themeObject.palette,
      secondary: {main: '#FE4225'},
      type: store.mode,
    },
  })

  return (
    <Context.Provider value={{store, dispatch}}>
      {/* <ThemeProvider theme={themeConfig}> */}
      <ThemeProvider theme={testTheme}>
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
  )
}

export default App
