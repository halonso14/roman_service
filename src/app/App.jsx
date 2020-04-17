import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import LogInPage from '../page/login/LogInPage';
import MainPage from '../page/main/MainPage';
import useStyles from './styles';

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
  },
});

const App = (props) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Router basename="/">
          <Switch>
            <Route path="/">
              <MainPage />
            </Route>
            <Route path="/main">
              <LogInPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
