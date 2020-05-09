import React from "react";
import { Provider } from "mobx-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// local files
import { MainPage } from "./main/Main";
import store from "../store";
import { Date } from "./date/Date";
import { SuccessPage } from "./reponses/success";
import { FailedPage } from "./reponses/fail";
import { BlockChangePage } from "./reponses/block-change";
import { ProgramPage } from "./reponses/program";
import { TermsPage } from "./reponses/terms";
import { ContactsPage } from "./reponses/contacts";
import { RulesPage } from "./reponses/rules";
import { PoliticaPage } from "./reponses/politica";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/date" component={Date} />
          <Route path="/success" component={SuccessPage} />
          <Route path="/failed" component={FailedPage} />
          <Route path="/program" component={ProgramPage} />
          <Route path="/rules" component={RulesPage} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/contacts" component={ContactsPage} />
          <Route path="/change" component={BlockChangePage} />
          <Route path="/politica" component={PoliticaPage} />

          <Route path="*" component={MainPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
