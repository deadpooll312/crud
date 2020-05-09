import React, {Fragment, useCallback} from 'react';
import {inject, observer} from "mobx-react";
import {useHistory} from "react-router";
import { Header } from '../../components/header';

export const ContactsPage = inject('store')(observer(({store}) => {
  const history = useHistory();
  
  const home = useCallback(() => {
    history.push('/');
  }, [history]);
  
  return <Fragment>
    <Header />
    <div className="failed-banner reposes-banner">
      <div className="center-box">
        <h3>Контакты</h3>
      </div>
    </div>
  </Fragment>
}));

