import React, {Fragment, useCallback} from 'react';
import {inject, observer} from "mobx-react";
import {useHistory} from "react-router";
import {Header} from '../../components/header';

export const ProgramPage = inject('store')(observer(({store}) => {
  const history = useHistory();

  const home = useCallback(() => {
    history.push('/');
  }, [history]);

  return <Fragment>
    <Header/>
    <div className="secondary-page_block">
      <div className="container __medium">
        <h2>реферальная программа</h2>
        <div className="row">
          <div className="flex-wrapper">
            <div className="item-referral_wrapper">
              <h5>ПОЛУЧАЙ ГАРАНТИРОВАННОЕ ВОЗНАГРАЖДЕНИЕ!</h5>
              <p>Привлекай при помощи промокода из личного кабинета новых участников и получай 5% на свой баланс с их КАЖДОГО пополнения. Каждый привлеченный вами по вашему промокоду игрок также получит 5% с каждого пополнения обратно на счет.</p>
            </div>
            <div className="item-referral_wrapper">
              <h5>ПОЛУЧИ 50% ОТ СУММЫ ВЫИГРЫША СВОЕГО РЕФЕРАЛА!</h5>
              <p>Привлекай при помощи промокода из личного кабинета новых участников и получай 5% на свой баланс с их КАЖДОГО пополнения. Каждый привлеченный вами по вашему промокоду игрок также получит 5% с каждого пополнения обратно на счет.</p>
            </div>
          </div>
        </div>
        <p>
          Полученные бонусные средства игрок может использовать как для ставок (при условии их достаточности), так и
          для вывода в течение 24 часов после публикации официальных результатов и завершения Игры.
        </p>
        <p>
          Любые попытки мошенничества в процессе использования реферальной программы признаются Организатором Игры
          способом воздействия на итоговый результат. Такие ставки и полученные по ним бонусы аннулируются, а аккаунты
          лиц, участвовавших в мошенничестве, получают перманентную блокировку.
        </p>
      </div>
    </div>
  </Fragment>
}));
