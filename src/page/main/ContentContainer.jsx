import React from 'react';
import { Route, withRouter } from 'react-router';
import routes from './routes';
import LogInPage from '../login/LogInPage';

const ContentContainer = () => {
  return (
    <>
      <Route path="/" exact>
        <LogInPage />
      </Route>
      {routes.map((route) =>
        route.label === 'divider' ? null : (
          <Route path={route.path} key={route.path}>
            {route.component}
          </Route>
        )
      )}
    </>
  );
};

export default withRouter(ContentContainer);
