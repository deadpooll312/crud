import React, {Fragment} from 'react';
import {inject, observer} from "mobx-react";
import { Header } from '../../components/header';

export const PoliticaPage = inject('store')(observer(({store}) => {
  return <Fragment>
    <Header />
    <div className="failed-banner reposes-banner">
      <div className="center-box">
        <h3>Политика</h3>
      </div>
    </div>
  </Fragment>
}));
