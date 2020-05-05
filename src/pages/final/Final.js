import React, { Fragment } from 'react';
import { inject, observer } from "mobx-react";
import {useHistory} from "react-router";

export const Final = inject("store")(observer(({store, props}) => {
  const history = useHistory();

  return <Fragment>
    <div className="final-section">
      <div className="container">
        <div className="sub_container">
          <h2>Теперь ты на шаг ближе к своей мечте!</h2>
          <h3>Проверь свою почту</h3>
          <div className="btn_wrapper">
            <button className="btn btn-back" onClick={() => history.push('/date')}>В личный кабинет</button>
          </div>
          <div className="btn_wrapper">
            <button className="btn btn-back" onClick={() => history.push('/')}>На главную</button>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}));
