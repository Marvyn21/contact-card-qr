import QrGenerator from "./components/QrGenerator";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#616161', 
      light: '#9e9e9e',
      dark: '#424242',
    },
    secondary: {
      main: '#757575',
    },
    background: {
      default: '#f5f5f5'
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
      color: '#424242'
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QrGenerator />
    </ThemeProvider>
  );
}
