import {createMuiTheme} from '@material-ui/core/styles'
import {red} from '@material-ui/core/colors'
// import { fontFamily } from '@material-ui/system';

const themeObject = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#FE4225',
    },
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    body1: {
      // fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(','),
      // fontFamily: ["Palatino Linotype", "Book Antiqua", "Palatino", "serif"].join(',')
      fontFamily: ['Helvetica', 'Arial', 'sans-serif'].join(','),
      fontWeight: 200,
    },
    button: {
      textTransform: 'capitalize',
    },
  },
})

export default themeObject
