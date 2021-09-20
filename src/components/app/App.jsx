import React from 'react';
import {useSelector} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';

import {AppRoute} from '../../const';
import Main from '../main/main';
import Login from '../login/login';
import Error from '../not-found/not-found';
import LoadingScreen from '../loading-screen/loading-screen';
import browserHistory from '../../browser-history';
import {getIsDataLoaded} from '../../store/places/selectors';

function App() {
  const isDataLoaded = useSelector(getIsDataLoaded);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main className="page page--gray page--index" />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <Login />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
