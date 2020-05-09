import React, { useState, useCallback, Fragment } from "react";
import { inject, observer } from "mobx-react";
import { useHistory } from "react-router";
import { LoginPopup } from "../pages/main/components/login.popup";
import { SignUpPopup } from "../pages/main/components/signup.popup";

export const Header = inject("store")(
  observer(({ store }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [show, setShow] = useState(null);
    const toggleModal = useCallback(value => setShow(value), []);
    const history = useHistory();

    const push = useCallback(
      (path) => {
        history.push(`/${path}`);
      },
      [history]
    );

    const signOut = useCallback(() => {
      store.auth.clearToken();
      history.push('/');
    }, []);
    
    
    const login = () => {
      return !store.auth.user.email ? (
        <Fragment>
          <button
            className="btn btn-sing-in"
            onClick={() => setShow("signup")}
          >
            Регистрация
          </button>
          <button
            className="btn btn-log-in"
            onClick={() => setShow("login")}
          >
            Вход
          </button>
        </Fragment>
      ) : (
        <button
          className="btn btn-log-in"
          onClick={signOut}
        >
          Выход
        </button>
      );
    }

    return (
      <Fragment>
        <LoginPopup show={show === 'login'} toggleModal={toggleModal}/>
        <SignUpPopup show={show === 'signup'} toggleModal={toggleModal}/>
        <div className="header">
          <div className="container">
            <div className="flex-wrapper">
              <div className="links-wrapper_header">
                <a className="brand-link" onClick={() => push('')}>
                  BEFREE. BINGO
                </a>
                <a className="link-item" onClick={() => push('terms')}>
                  Правила
                </a>
                <a className="link-item" onClick={() => push('rules')}>
                  Как сделать ставку
                </a>
                <a className="link-item" onClick={() => push('program')}>
                  Реферальная программа
                </a>
              </div>

              <span className="burger-btn" onClick={() => setShowMenu(true)}>
                <i></i>
              </span>
              {showMenu && (
                <ul className="mobile-list">
                  <li>
                    <a className="link-item" onClick={() => push('terms')}>
                      Правила
                    </a>
                  </li>
                  <li>
                    <a  onClick={() => push('rules')} className="link-item">
                      Как сделать ставку
                    </a>
                  </li>
                  <li>
                    <a onClick={() => push('program')} className="link-item">
                      Реферальная программа
                    </a>
                  </li>
                  { !store.auth.user.email ? <Fragment><li>
                    <button
                      className="btn btn-sing-in"
                      onClick={() => setShow("signup")}
                    >
                      Регистрация
                    </button>
                  </li>
                    <li>
                      <button
                        className="btn btn-log-in"
                        onClick={() => setShow("login")}
                      >
                        Вход
                      </button>
                    </li></Fragment> : <Fragment><li>
                    <button
                      className="btn btn-log-in"
                      onClick={signOut}
                    >
                      Выход
                    </button>
                  </li></Fragment> }
                  
                </ul>
              )}

              <div className="registration-wrapper_header">
                {login()}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  })
);
