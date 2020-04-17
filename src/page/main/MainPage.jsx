import { Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React from 'react';
import { connect, useStore } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useStyles from '../../app/styles';
import { createdLoggedOut } from '../login/actions';
import { openDrawer } from './actions';
import AppDrawer from './AppDrawer';
import ContentContainer from './ContentContainer';

const MainPage = (props) => {
  const classes = useStyles();
  const { drawer, openDrawer } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const history = useHistory();
  const store = useStore();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);

    store.dispatch(createdLoggedOut());
    history.replace('/login');
  };

  const handleDrawerOpen = () => {
    openDrawer();
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawer.isOpen,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: drawer.isOpen,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Roman Service
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={openMenu}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Log out</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <AppDrawer />
      <ContentContainer />
    </>
  );
};

const mapStateToProps = (state) => ({
  drawer: state.drawer,
});

const mapDispatchToProps = {
  openDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
