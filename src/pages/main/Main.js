import React, { useState, Fragment, useCallback } from "react";
import { inject, observer } from "mobx-react";
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
        {/*<LoginPopup show={showLogin} toggleModal={toggleModal} />*/}
        {/*<SignUpPopup show={showSignup} toggleModal={toggleModal} />*/}

        {/*<div className="container">*/}
        {/*  <h1 onClick={() => toggleModal(LOGIN)}>ВОЙТИ {store.auth.user.email}</h1>*/}
        {/*  <h1 onClick={() => toggleModal(SIGNUP)}>РЕГИСТРАЦИЯ {store.auth.user.email}</h1>*/}
        {/*  <h1>Balance {store.auth.user.balance}</h1>*/}
        {/*  <div className="form-group">*/}
        {/*    <label htmlFor="email">Email address:</label>*/}
        {/*    <input*/}
        {/*      type="text"*/}
        {/*      className="form-control"*/}
        {/*      placeholder="Enter email"*/}
        {/*      id="email"*/}
        {/*      onKeyPress={press}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}

        <div className="header">
            <div className="container">
                <div className="flex-wrapper">
                    <div className="links-wrapper_header">
                        <a href="#" className="brand-link">BEFREE. BINGO</a>
                        <a href="#" className="link-item">Сделать ставку</a>
                        <a href="#" className="link-item">Правила</a>
                    </div>
                    <div className="registration-wrapper_header">
                        <button className="btn btn-sing-in">Регистрация</button>
                        <button className="btn btn-log-in">Вход</button>
                    </div>
                </div>
            </div>
        </div>

          <div className="main-banner">
              <div className="container">
                    <h1>Угадай дату <br/>открытия границ <br/>и стань миллионером!</h1>
                  <ul>
                      <li><span className="circle"></span>Хочешь улететь за границу</li>
                      <li><span className="circle"></span>Устал от карантина?</li>
                  </ul>
                  <h4>Твой шанс воплотить свои мечты!</h4>
                  <div className="btn_wrapper">
                      <button className="btn btn-banner">Угадай дату и забирай деньги</button>
                  </div>
              </div>
          </div>

          <div className="regulations_section">
              <div className="container container_large">
                    <div className="flex-wrapper">
                        <div className="left-block item-regulations">
                            <h3>Команда befree.bingo</h3>
                            <h5>дает каждому возможность выйти с карантина РЕАЛЬНО ДРУГИМ ЧЕЛОВЕКОМ!</h5>
                        </div>
                        <div className="center-block item-regulations">
                            <h3>Правила <br/>конкурс <br/>просты</h3>
                        </div>
                        <div className="right-block item-regulations">
                            <ul>
                                <li><span>1. </span>Ты выбираешь дату открытия границ РФ с другими странами (авиасообщение)</li>
                                <li><span>2. </span>Твои данные вносятся в децентрализованный реестр, в котором нельзя вносить изменения</li>
                                <li><span>3. </span>Если ты выбрал дату, которая совпала с той, что подтвердится в официальных источниках*, то забираешь <a href="#">JACKPOT</a></li>
                            </ul>
                        </div>
                    </div>
              </div>
          </div>

          <div className="footer">
              <div className="container">
                  <div className="brand_wrapper">
                      <a href="#" className="brand-link">BEFREE. BINGO</a>
                  </div>
                  <div className="flex-wrapper">
                      <a href="#">Условия и положения</a>
                      <a href="#">Политика конфиденциальности</a>
                      <a href="#">Контакты</a>
                      <a href="#">Блокчейн</a>
                      <a href="#">Правила</a>
                  </div>
              </div>
          </div>

          <div className="modal-popup_wrapper delete-class">
              <div className="modal-inner modal-regist">
                  <div className="header_modal">
                      <h4>Регистрация</h4>
                      <h6>Have an account? <a href="#">Login</a></h6>
                  </div>
                  <div className="body_modal">
                      <form action="">
                          <div className="field_wrapper">
                              <input className="field_form" type="email" placeholder="E-mail"/>
                          </div>
                          <div className="field_wrapper">
                              <input className="field_form" type="text" placeholder="Пароль"/>
                          </div>
                          <div className="field_wrapper">
                              <input className="field_form" type="text" placeholder="Подтвердите пароль"/>
                          </div>
                          <div className="btn_wrapper">
                              <button className="btn btn-reg">Зарегистрироваться</button>
                          </div>
                      </form>
                  </div>
                  <div className="footer_body">
                  </div>
              </div>
              <div className="modal-inner modal-log-in"> </div>
          </div>

      </Fragment>
    );
  })
);
