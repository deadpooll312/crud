import React, {Fragment, useCallback} from 'react';
import {inject, observer} from "mobx-react";
import {useHistory} from "react-router";

export const FailedPage = inject('store')(observer(({store}) => {
  const history = useHistory();
  
  const home = useCallback(() => {
    history.push('/');
  }, [history]);
  
  return <Fragment>
    <h1>Пополнение вашего счета не успешна!</h1>
    <button onClick={home}>На главную</button>
  </Fragment>
}));

