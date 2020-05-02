import React, { useState, Fragment, useCallback } from "./node_modules/react";
import { inject, observer } from "./node_modules/mobx-react";
import axiosInstance from "../../api";
import {LoginPopup} from './components/login.popup';
import { SignUpPopup } from "./components/signup.popup";
import {LOGIN, SIGNUP} from "../../const/popup.const";

export const MainPage = inject("store")(
  observer(({ store, props }) => {
    const [showLogin, setLogin] = useState(false);
    const [showSignup, setSignup] = useState(false);

    const press = (e) => {
      if (e.key === "Enter") {
        axiosInstance
          .post(`/auth/balance/fill/`, { balance: e.target.value })
          .then(({ data }) => sendToPayment(data));
      }
    };

    const sendToPayment = ({ data }) => {
      window.open(data.url, "_blank");
    };

    const toggleModal = useCallback((value) => {
      switch(value) {
        case LOGIN:
          setSignup(false);
          setLogin(true);
          break;
        case SIGNUP:
          setLogin(false);
          setSignup(true);
          break;
        default:
          setSignup(false);
          setLogin(false);
      }
    }, []);

    return (
      <Fragment>
        <LoginPopup show={showLogin} toggleModal={toggleModal} />
        <SignUpPopup show={showSignup} toggleModal={toggleModal} />

        <div className="container">
          <h1 onClick={() => toggleModal(LOGIN)}>ВОЙТИ {store.auth.user.email}</h1>
          <h1 onClick={() => toggleModal(SIGNUP)}>РЕГИСТРАЦИЯ {store.auth.user.email}</h1>
          <h1>Balance {store.auth.user.balance}</h1>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter email"
              id="email"
              onKeyPress={press}
            />
          </div>
        </div>
      </Fragment>
    );
  })
);
