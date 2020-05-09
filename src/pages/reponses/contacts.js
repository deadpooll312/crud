import React, {Fragment, useCallback} from 'react';
import {inject, observer} from "mobx-react";
import {useHistory} from "react-router";
import { Header } from '../../components/header';
import {Footer} from "../../components/footer";

export const ContactsPage = inject('store')(observer(({store}) => {
  const history = useHistory();
  
  const home = useCallback(() => {
    history.push('/');
  }, [history]);
  
  return <Fragment>
    <Header />
    <div className="secondary-page_block">
      <div className="container __medium">
        <h2>КОНТАКТЫ</h2>
        <h6>Игра зарегистрирована в законодательном поле Кюрасао</h6>
        <h6>Государственный регистрационный адрес: <b>Heelsumstraat 51, E-Commerce Park, Curaçao</b></h6>
        <h6>Регистрационный номер: <b>147666</b></h6>
      </div>
    </div>
    <Footer />
  </Fragment>
}));

