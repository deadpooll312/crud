import React, {Fragment, useEffect} from 'react';
import {inject, observer} from "mobx-react";
import {DateBalance} from "./components/date.balance";
import {DateHistory} from "./components/date.history";
import InputMask from 'react-input-mask';

export const Date = inject("store")(observer(({store, props}) => {
  useEffect(() => {
    store.auth.getUser();
  }, [store.auth]);
  
  return <Fragment>
    <div className="date-section">
      <div className="container">
        <div className="flex-wrapper">
          <DateHistory/>
          <DateBalance/>
        </div>
      </div>
      <div className="container container_medium">
        <div className="field-wrapper">
          <div>
            <InputMask mask="99/99/99" />
          </div>
        </div>
        <div className="btns_wrapper">
          <button className="btn btn-bet">Введите сумму ставки</button>
          <button className="btn btn-date active">Выбрать дату</button>
        </div>
      </div>
    </div>
    
    {/*<div className="information-tooltip">*/}
    {/*  <div className="close-icon">x</div>*/}
    {/*  <p><span>i</span> Для этого вам необходимо пополнить баланс</p>*/}
    {/*</div>*/}
  
  </Fragment>
}));
