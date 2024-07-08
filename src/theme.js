import { createTheme } from "@mui/material";
import { blue, red, grey } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
      primary: {
        main: blue[500],
        light: blue[100],
        dark: blue[600],
      },
      secondary: {
        main: red[500],
        light: red[400],
        dark: red[600],
      },
      text: {
        primary: grey[900],
        secondary: grey[500],
      },
    },
    custom: {
      text: {
        red: red[500],
        white: "#FFFFFF",
        blue: blue[500],
      },
    },
  });
  