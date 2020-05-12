import React, {Fragment, useCallback} from 'react';
import {inject, observer} from "mobx-react";
import {useHistory} from "react-router";
import {Header} from '../../components/header';
import {Footer} from "../../components/footer";

export const BlockChangePage = inject('store')(observer(({store}) => {
  const history = useHistory();

  const home = useCallback(() => {
    history.push('/');
  }, [history]);

  return <Fragment>
    <Header/>
    <div className="secondary-page_block">
      <div className="container __medium">
        <h2>БЛОКЧЕЙН</h2>
        <p>
          Все выполненные ставки выполняются за счет стейблкоина <a href="#"><b>BingoBet</b></a> и попадают в хеш
          блокчейна. Один рубль равен
          одной монете BingoBet и не подвержен инфляции.
        </p>
        <p>
          Выполненные ставки нельзя удалить, изменить или скомпроментировать, поскольку все данные хранятся в хеше
          блокчейна BingoBet.
        </p>
        <p>
          Посмотреть все ставки участников Игры в блокчейн: <a>#внешний_ресурс</a><br/>
          Изучить хеш своих ставок: <a href="#">#личный_кабинет</a>
        </p>
      </div>
    </div>
    <Footer />
  </Fragment>
}));
