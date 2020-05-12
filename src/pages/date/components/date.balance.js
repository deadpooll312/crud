import React, {Fragment, useState, useCallback} from "react";
import {inject, observer} from "mobx-react";
import {DateFill} from "./date.fill";

export const DateBalance = inject('store')(observer(({store}) => {
  const {auth} = store;
  const [show, setShow] = useState(false);
  const [showNotification, setNitification] = useState(false);

  const withdraw = useCallback(() => {
    setNitification(true);
    setTimeout(() => setNitification(false), 3000);
  }, []);

  return <Fragment>
    <DateFill show={show} hidePopup={() => setShow(false)} />
    {showNotification && <div className="information-tooltip" onClick={() => setNitification(false)}>
      <div className="close-icon">x</div>
      <p><span>i</span>Вывести средства возможно только окончания карантина</p>
    </div>}
    

    <div className="info-block">
      <h3 className="title balance-title">баланс: <span>{auth.user.balance}$</span></h3>
      <p>Минимальная сумма пополнения баланса - 750 рублей.</p>
      <div className="btn_wrapper">
        <button
          onClick={() => setShow(true)}
          className="btn btn-pour-in">Пополнить баланс</button>
        <button className="btn btn-bring-out" onClick={withdraw}>Вывести средства</button>
      </div>
      <h6>Вывод средств станет возможен в течение 24 часов с момента завершения конкурса.</h6>
    </div>
  </Fragment>
}));
