import React, { Suspense } from 'react';
import Example from '../example';
import { Switch, HashRouter as Router, Route, Redirect } from 'react-router-dom';

import routeConfigs from './routeConfigs';

const RootRoute = () => {
  return (
    <Router>
      <Example>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            {routeConfigs.map(({ name, ...rest }) => (
              <Route {...rest}/>
            ))}
            <Redirect from={'/'} to={'/icon'}/>
          </Switch>
        </Suspense>
      </Example>
    </Router>
  );
};

export default RootRoute;
