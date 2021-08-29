import { createTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'


const theme = createTheme({
  palette: {
    primary: {
      // main: '#1976d2'
      main: '#6e1826',
    },
    secondary: {
      main: '#f44336',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme
