import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
  },
});



export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
