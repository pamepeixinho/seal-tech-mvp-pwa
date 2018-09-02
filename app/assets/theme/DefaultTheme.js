import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#FFFF',
      paper: '#FFFF',
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#731FB0',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main
    },
    secondary: {
      main: '#1ED0E3',
    },
    // error: will use the default color
  },
});

export default theme;
