import React from "react";
import { Provider } from "mobx-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// local files
import { PrivateRoute } from "./Private";
import {MainPage} from "./main/Main";
import {LoginPage} from "./login/Login";
import { SignUpPage } from "./signup/Signup";
import store from '../store';

export default function App() {
  return <div className="container">
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={(props) => <MainPage {...props} />}/>
          <Route exact path="/login" component={(props) => <LoginPage {...props} />}/>
          <Route path="/signup" component={(props) => <SignUpPage {...props} />}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  </div>
}
