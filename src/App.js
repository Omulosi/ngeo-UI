import React, { Component } from 'react'
import App from 'base-shell/lib'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
import config from './config'

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: blue[500],
    },
  },
});


export default class Demo extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <App config={config} />
      </ThemeProvider>
    )
  }
}
