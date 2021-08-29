import { useEffect } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Theme from '../components/Theme'
import Main from '../layout/Main'
import '../styles/globals.css'
import '@fontsource/roboto'

const App = (props) => {
  const { Component, pageProps } = props

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, [])

  return (
    <ThemeProvider theme={Theme}>
      <Main>
        <CssBaseline />
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  )
}

export default App
