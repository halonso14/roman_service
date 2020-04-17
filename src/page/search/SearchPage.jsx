import React from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { activateSocialIDProtection, deactivateSocialIDProtection } from './actions';
import useStyles from '../../app/styles';

function ProtectedSocialIDInfo({ protectedID, totalID }) {
  const classes = useStyles();
  const [message, setMessage] = React.useState(
    `${protectedID} / ${totalID} Social IDs are protected`
  );

  React.useEffect(() => {
    setMessage(`${protectedID} / ${totalID} Social IDs are protected`);
  }, [protectedID, totalID]);

  return (
    <Grid container item>
      <Typography className={classes.title}>{message}</Typography>
    </Grid>
  );
}

function ProtectedSocialIDPanel(props) {
  const classes = useStyles();

  const { SocialIDProtection, activateSocialIDProtection, deactivateSocialIDProtection } = props;

  const initValue = SocialIDProtection.isSocialIDProtected ? 24 : 0;

  const [protectedID, setProtectedID] = React.useState(initValue);
  const totalID = 30;

  const handleClickProtect = () => {
    activateSocialIDProtection();
    setProtectedID(24);
  };

  const handleClickUnprotect = () => {
    deactivateSocialIDProtection();
    setProtectedID(0);
  };

  return (
    <Paper variant="outlined" square>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={2}>
          <Grid container item>
            <Typography className={classes.title}>Protected Social IDs</Typography>
          </Grid>
          <ProtectedSocialIDInfo protectedID={protectedID} totalID={totalID} />
          <Grid container>
            <Grid item xs={6}>
              <Grid container justify="center">
                <Button
                  disabled={SocialIDProtection.isSocialIDProtected}
                  variant="contained"
                  color="primary"
                  onClick={handleClickProtect}
                >
                  Protect Social IDs
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="center">
                <Button
                  disabled={!SocialIDProtection.isSocialIDProtected}
                  variant="contained"
                  color="secondary"
                  onClick={handleClickUnprotect}
                >
                  Unprotect Social IDs
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </Paper>
  );
}

const mapStateToProps = (state) => ({
  protection: state.protection,
});

const mapDispatchToProps = {
  activateSocialIDProtection,
  deactivateSocialIDProtection,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedSocialIDPanel);
