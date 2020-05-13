import React, {Fragment, useState, useCallback, useEffect} from "react";
import {inject, observer} from "mobx-react";
import {DateFill} from "./date.fill";
import moment from "moment";

export const DateBalance = inject('store')(observer(({store}) => {
  const oldDate = new Date('Tue May 12 2020 00:00:00');
  const getDiff = () => moment.duration(moment(new Date()).diff(moment(oldDate))).asSeconds();
  const [diff, setDiff] = useState(getDiff());
  const {auth} = store;
  const [show, setShow] = useState(false);
  const [showNotification, setNitification] = useState(false);

  const withdraw = useCallback(() => {
    setNitification(true);
    setTimeout(() => setNitification(false), 3000);
  }, []);
  
  useEffect(() => {
    store.auth.getUser();
    setInterval(() => setDiff(getDiff()), 1000);
  }, []);

  return <Fragment>
    <DateFill show={show} hidePopup={() => setShow(false)} />
    {showNotification && <div className="information-tooltip" onClick={() => setNitification(false)}>
      <div className="close-icon">x</div>
      <p><span>i</span>Вывести средства возможно только окончания карантина</p>
    </div>}
    

    <div className="info-block">
      <h3 className="title balance-title">баланс: <span>{auth.user.balance}₽</span></h3>
      <p>Минимальная сумма пополнения баланса - 750 рублей.</p>
      <div className="btn_wrapper">
        <button
          onClick={() => setShow(true)}
          className="btn btn-pour-in">Пополнить баланс</button>
        <button className="btn btn-bring-out" onClick={withdraw}>Вывести средства</button>
      </div>
      <h6>Вывод средств станет возможен в течение 24 часов с момента завершения конкурса.</h6>
      <br/>
      <h6>Джекпот на 10 мая 2020 года составляет: {diff &&
      <b>{(1000000 + (diff * .1)).toFixed(1)}0 рублей</b>}</h6>
    </div>
  </Fragment>
}));
