import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main  from '../components/views/Main';
import Landing  from '../components/views/Landing';
import Register  from '../components/views/Register';
import Login  from '../components/views/Login';
import HomeContainer  from '../components/containers/HomeContainer';
import MyPlanContainer from '../components/containers/MyPlanContainer';

const router = (
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={HomeContainer}></IndexRoute>
        <Route path="/myPlan" component={MyPlanContainer} />
      </Route>
    </Router>
)

export default router;
