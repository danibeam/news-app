import { createMuiTheme } from '@material-ui/core/styles';
import { green, blue, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
      primary: green,
      secondary: blue,
      error: red,
      // Used by `getContrastText()` to maximize the contrast between the background and
      // the text.
      contrastThreshold: 3,
      // Used to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2
    },
    typography: {
      body1: {
        fontFamily: ["Palatino Linotype", "Book Antiqua", "Palatino", "serif"].join(',')
      },
      button: {
        textTransform: "capitalize"
      }
    }
  });

  export default theme;