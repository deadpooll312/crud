import React from 'react';
import {Redirect, Route} from "react-router-dom";
import { observer, inject } from 'mobx-react';

export const PrivateRoute = inject('store')(observer(({store, component: Component}) => {
  const {auth} = store;
  const {token} = localStorage;

  auth.setToken(token);

  if (!auth.token) {
    return <Redirect to={{pathname: "/login"}} />
  }

  return <Route render={props => <Component {...props}/>} />
}));

