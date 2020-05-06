import React, {Fragment, useCallback, useEffect} from 'react';
import {inject, observer} from "mobx-react";
import {useHistory} from "react-router";

export const SuccessPage = inject('store')(observer(({store}) => {
  const history = useHistory();

  useEffect(() => {
    store.auth.getUser();
  }, [store.auth]);

  const home = useCallback(() => {
    history.push('/');
  }, [history]);

  return <Fragment>
    <div className="success-banner reposes-banner">
      <div className="center-box">
        <h3>Ваш баланс пополнен успешно</h3>
        <button className="btn btn_reposes" onClick={home}>На главную</button>
      </div>
    </div>
  </Fragment>
}));
