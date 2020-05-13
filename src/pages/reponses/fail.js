import React, {Fragment, useCallback} from 'react';
import {inject, observer} from "mobx-react";
import {useHistory} from "react-router";
import { Header } from '../../components/header';
import {Footer} from "../../components/footer";

export const FailedPage = inject('store')(observer(({store}) => {
  const history = useHistory();
  
  const home = useCallback(() => {
    history.push('/date');
  }, [history]);
  
  return <Fragment>
    <Header />
    <div className="failed-banner reposes-banner">
      <div className="center-box">
        <h3>Операция не прошла, повторите еще раз</h3>
        <button className="btn btn_reposes" onClick={home}>Повторить операцию</button>
      </div>
    </div>
    <Footer />
  </Fragment>
}));

