import { useState, useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import Layout from '@/components/Layout'
import useMixpanel from '@/components/helpers/useMixpanel'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { themeDefault, themeDark } from '@/styles/themes'
import '@/styles/globals.css'


export default function MyApp({ Component, pageProps }: AppProps) {

  const [darkMode, setDarkMode] = useState<boolean>(Cookies.get('darkMode') === 'true' || false)
  const router = useRouter()
  const mixpanel = useMixpanel()

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  // Dark Mode Cookie Setter on Change
  useEffect(() => {
    Cookies.set('darkMode', String(darkMode))
  }, [darkMode])

  useEffect(() => {
    mixpanel.trackNav(router.asPath, router.query)
  }, [router])

  return (
    <>
      <ThemeProvider theme={darkMode ? themeDark : themeDefault}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout 
          setDarkMode={setDarkMode}
        >
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}