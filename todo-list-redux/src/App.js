import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { purple, green } from 'material-ui/colors'

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
})

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Lista de Pendientes</h1>
          </header>
          <p className="App-intro">
            <TodoList />
          </p>
        </div>
      </MuiThemeProvider>
    )
  }
}
