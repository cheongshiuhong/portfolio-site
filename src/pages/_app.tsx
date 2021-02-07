import { useState, useEffect } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import Cookies from 'js-cookie'
import Layout from '@/components/Layout'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { themeDefault, themeDark } from '@/styles/themes'
import '@/styles/globals.css'


export default function MyApp({ Component, pageProps }: AppProps) {

  const [darkMode, setDarkMode] = useState<boolean>(Cookies.get('darkMode') === 'true' || false)

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

  return (
    <>
      <Head>
        <title>Shopee DSMS</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
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