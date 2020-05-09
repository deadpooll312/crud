import React, {Fragment, useEffect} from 'react';
import {inject, observer} from "mobx-react";
// local files
import {DatePromocode} from "./components/date.propcode";
import {DateUser} from "./components/date.user";
import {DateRate} from "./components/date.rate";
import {Header} from '../../components/header';
import { Footer } from '../../components/footer';

export const Date = inject("store")(observer(({store, props}) => {
  useEffect(() => {
    store.auth.getUser();
  }, [store.auth]);
  
  return <Fragment>
    <Header />

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

    <Footer />
  
  </Fragment>
}));
