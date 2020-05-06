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
    <h1>Ваш баланс пополнен успешно</h1>
    <button onClick={home}>На главную</button>
  </Fragment>
}));