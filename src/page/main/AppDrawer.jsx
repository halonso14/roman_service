import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useStyles from '../../app/styles';
import { closeDrawer } from './actions';
import routes from './routes';

const AppDrawer = (props) => {
  const { drawer, closeDrawer } = props;
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  const handleDrawerClose = () => {
    closeDrawer();
  };

  const onRouteClick = (route) => {
    history.push(route.path);
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: drawer.isOpen,
        [classes.drawerClose]: !drawer.isOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: drawer.isOpen,
          [classes.drawerClose]: !drawer.isOpen,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {routes.map((route) =>
          route.label === 'divider' ? (
            <Divider />
          ) : (
            <ListItem
              button
              key={route.label}
              onClick={() => {
                onRouteClick(route);
              }}
            >
              <ListItemIcon>{route.icon}</ListItemIcon>
              <ListItemText primary={route.label} />
            </ListItem>
          )
        )}
      </List>
    </Drawer>
  );
};

const mapStateToProps = (state) => ({
  drawer: state.drawer,
});

const mapDispatchToProps = {
  closeDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawer);
