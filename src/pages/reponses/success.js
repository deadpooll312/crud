import React, {Fragment, useCallback, useEffect} from 'react';
import {inject, observer} from "mobx-react";
import {useHistory} from "react-router";
import { Header } from '../../components/header';
import {Footer} from "../../components/footer";

export const SuccessPage = inject('store')(observer(({store}) => {
  const history = useHistory();

  useEffect(() => {
    store.auth.getUser();
  }, [store.auth]);

  const home = useCallback(() => {
    history.push('/date');
  }, [history]);

  return <Fragment>
    <Header />
    <div className="success-banner reposes-banner">
      <div className="center-box">
        <h3>Опурерация прошла успешно</h3>
        <button className="btn btn_reposes" onClick={home}>Вернуться в личный кабинет</button>
      </div>
    </div>
    <Footer />
  </Fragment>
}));
