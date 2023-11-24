import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { Appbar } from 'ui/Appbar';
import { RecoilRoot } from "recoil";

const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
  },
});



export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Appbar></Appbar>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
