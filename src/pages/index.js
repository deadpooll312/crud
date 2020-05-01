import React from "react";
import { Provider } from "mobx-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// local files
import { PrivateRoute } from "./Private";
import {MainPage} from "./Main";
import {LoginPage} from "./login/Login";
import store from '../store';
import { SignUpPage } from "./signup/Signup";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={(props) => <MainPage {...props} />}/>
          <Route exact path="/login" component={(props) => <LoginPage {...props} />}/>
          <Route path="/signup" component={(props) => <SignUpPage {...props} />}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
