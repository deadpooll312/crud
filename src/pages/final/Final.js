import React, { Fragment } from 'react';
import { inject, observer } from "mobx-react";

export const Final = inject("store")(observer(({store, props}) => {
  return <Fragment>
    <div className="final-section">
      <div className="container">
        <div className="sub_container">
          <h2>Теперь ты на шаг ближе к своей мечте!</h2>
          <h3>Проверь свою почту</h3>
          <p>Ссылка на уникальный код твоей транзакции:</p>
          <a href="#">befree.bingo.mrip</a>
          <div className="btn_wrapper">
            <button className="btn btn-back">Вернуться в личный кабинет</button>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}));
