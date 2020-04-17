import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  createStyles,
  makeStyles,
  TextField,
  Theme,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createLogInSucces } from './actions';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`,
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1,
    },
    header: {
      textAlign: 'center',
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    card: {
      marginTop: theme.spacing(10),
    },
  })
);

const LogInPage = (props) => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [helperText, setHelperText] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();
  const store = useStore();

  useEffect(() => {
    if (username.trim() && password.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [username, password]);

  const handleLogin = () => {
    console.log(`login`);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      setIsButtonDisabled(true);
      handleLogin();
    }
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Sign in for Roman Service" />
        <CardContent>
          <div>
            <TextField
              error={error}
              fullWidth
              id="username"
              type="email"
              label="Username"
              placeholder="Username"
              margin="normal"
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e)}
            />
            <TextField
              error={error}
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              helperText={helperText}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e)}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.loginBtn}
            onClick={() => handleLogin()}
            disabled={isButtonDisabled}
          >
            Log in
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default LogInPage;
