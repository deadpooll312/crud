import React from "react";
import { Provider } from "mobx-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Container} from '@material-ui/core';

// local files
import {MainPage} from "./main/Main";
import store from '../store';

export default function App() {
  return <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={(props) => <MainPage {...props} />}/>
        <Route path="*" component={(props) => <MainPage {...props} />}/>
      </Switch>
    </BrowserRouter>
  </Provider>
}
