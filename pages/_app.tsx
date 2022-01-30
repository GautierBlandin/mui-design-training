import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import {TypographyOptions} from "@mui/material/styles/createTypography";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
      palette: {
          text: {
              primary: 'rgb(33, 43, 54)',
              secondary: 'rgb(99, 115, 129)'
          }
      }
  }, {
  })
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
