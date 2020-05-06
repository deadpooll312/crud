import React, {Fragment, useState} from "react";
import {inject, observer} from "mobx-react";
import {DateFill} from "./date.fill";

export const DateBalance = inject('store')(observer(({store}) => {
  const {auth} = store;
  const [show, setShow] = useState(false);

  return <Fragment>
    <DateFill show={show} hidePopup={() => setShow(false)} />

    <div className="info-block">
      <h3 className="title balance-title">баланс: <span>{auth.user.balance}$</span></h3>
      <p>Минимальная сумма пополнения баланса - 750 рублей.</p>
      <div className="btn_wrapper">
        <button
          onClick={() => setShow(true)}
          className="btn btn-pour-in">Пополнить баланс</button>
        <button className="btn btn-bring-out">Вывести средства</button>
      </div>
    </div>
  </Fragment>
}));