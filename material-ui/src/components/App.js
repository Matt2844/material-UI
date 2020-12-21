import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'


import theme from '../components/ui/Theme'
import Header from '../components/ui/Header'

function App () {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
    </MuiThemeProvider>
  );
}

export default App;
