import React from "react";
import { Provider } from "mobx-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// local files
import {MainPage} from "./main/Main";
import store from '../store';
import { Final } from "./final/Final";
import {Account} from './accout/Account';
import {Date} from './date/Date';
import {SuccessPage} from "./reponses/success";
import {FailedPage} from "./reponses/fail";

export default function App() {
  return <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/final" component={Final}/>
        <Route path="/success" component={SuccessPage} />
          <Route path="/failed" component={FailedPage} />
        <Route exact path="/account" component={(props) => <Account {...props} />}/>
        <Route exact path="/date" component={(props) => <Date {...props} />}/>
        <Route path="*" component={(props) => <MainPage {...props} />}/>
      </Switch>
    </BrowserRouter>
  </Provider>
}
