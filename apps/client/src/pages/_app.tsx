import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { Appbar } from 'ui/Appbar';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { userEmailState, userState } from 'store';
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
        <HeaderComponent Component={Component} pageProps={pageProps}></HeaderComponent>
      </ThemeProvider>
    </RecoilRoot>
  );
}


function HeaderComponent({ Component, pageProps })
{
  const userStateValue = useRecoilValue(userEmailState);
  const setUserState = useSetRecoilState(userState);
  const router = useRouter();
  return ( 
    <div>
      <Appbar 
        userState={userStateValue}
        onSignupParent={()=>{
          router.push("/signup");
        }}
        onSigninParent={()=>{
          router.push("/signin");
        }}
        onSignoutParent={()=>{
          localStorage.setItem("token", "");
          setUserState({
            isLoading: false,
            userEmail: null
          });
          router.push("/");
        }}></Appbar> 
        <Component {...pageProps} />
    </div>
    );
}
