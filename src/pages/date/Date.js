import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {inject, observer} from "mobx-react";
import {useHistory} from "react-router";
// local files
import {DatePromocode} from "./components/date.propcode";
import {DateInfo} from "./components/date.info";
import {DateUser} from "./components/date.user";
import {DateRate} from "./components/date.rate";

export const Date = inject("store")(observer(({store, props}) => {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    store.auth.getUser();
  }, [store.auth]);
  
  const signOut = useCallback(() => {
    store.auth.clearToken();
    history.push('/');
  }, []);
  
  const scroll = useCallback(() => {
    window.scrollTo({top: 500, behavior: 'smooth'});
  }, []);
  
  return <Fragment>
    <div className="header">
      <div className="container">
        <div className="flex-wrapper">
          <div className="links-wrapper_header">
            <a href="#" className="brand-link" onClick={() => history.push('/')}>BEFREE. BINGO</a>
            <a href="#" className="link-item" onClick={scroll}>Сделать ставку</a>
            <a href="#" className="link-item" onClick={scroll}>Правила</a>
          </div>

          <span className="burger-btn" onClick={() => setShowMenu(true)}><i></i></span>
          {showMenu && <ul className="mobile-list">
            <li><a href="#" className="link-item">Сделать ставку</a></li>
            <li><a href="#" className="link-item">Правила</a></li>
            <li><a href="#" className="link-item">Реферальная программа</a></li>
            <li><button className="btn btn-sing-in">Регистрация</button></li>
            <li><button className="btn btn-log-in">Вход</button></li>
          </ul>}
        
          <div className="registration-wrapper_header">
            <button className="btn btn-log-in" onClick={scroll}>Сделать ставку</button>
            <button className="btn btn-log-in" onClick={signOut}>Выход</button>
          </div>
        </div>
      </div>
    </div>

    <DateRate />
    
    <div className="personal-data-section">
      <div className="container">
        <div className="flex-wrapper">
          <DateUser />
          <DatePromocode />
        </div>
      </div>
    </div>
    
    {/*<div className="information-tooltip">*/}
    {/*  <div className="close-icon">x</div>*/}
    {/*  <p><span>i</span> Для этого вам необходимо пополнить баланс</p>*/}
    {/*</div>*/}
    
    <div className="pour-in_modal-wrapper delete-class">
      <div className="pour-in_modal">
        <h3>Пополнение баланса</h3>
        <input className="pour-in-field" type="text"/>
        <div className="btns-wrapper">
          <button className="btn btn-pour-in">Пополнить</button>
          <button className="btn btn-cancel">Отмена</button>
        </div>
      </div>
    </div>
  
  </Fragment>
}));
