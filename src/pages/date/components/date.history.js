import React from "react";
import {inject, observer} from "mobx-react";

export const DateHistory = inject('store')(observer(({store}) => {
  return <div className="history-block">
    <h3 className="title">История ставок</h3>
    <div className="history-inner">
      <div className="list_date">
        <div className="item_date">
          <p className="title_item">Ставка <b>10$</b> на <b>01.07.20</b></p>
          <span className="status_item status-win">выиграна</span>
          <a href="#" className="hash_item">хеш</a>
          <span className="date_item">04.05.2020</span>
        </div>
        <div className="item_date">
          <p className="title_item">Пополнение баланса на <b>135$</b></p>
          <span className="date_item">04.05.2020</span>
        </div>
        <div className="item_date">
          <p className="title_item">Ставка <b>10$</b> на <b>01.07.20</b></p>
          <span className="status_item status-loss">проиграна</span>
          <a href="#" className="hash_item">хеш</a>
          <span className="date_item">04.05.2020</span>
        </div>
        <div className="item_date">
          <p className="title_item">Ставка <b>10$</b> на <b>01.07.20</b></p>
          <span className="status_item status-undefined">не рассчитана</span>
          <a href="#" className="hash_item">хеш</a>
          <span className="date_item">04.05.2020</span>
        </div>
        <div className="item_date">
          <p className="title_item">Пополнение баланса на <b>135$</b></p>
          <span className="date_item">04.05.2020</span>
        </div>
      </div>
      <ul className="pagination" role="menubar" aria-label="Pagination">
        <li><a href=""><span className="arrow_pagination to-first"></span></a></li>
        <li><a href=""><span className="arrow_pagination to-previous"></span></a></li>
        <li><a href="">1</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
        <li className="active"><a href="">4</a></li>
        <li><a href="">5</a></li>
        <li><a href="">6</a></li>
        <li><a href=""><span className="arrow_pagination to-next"></span></a></li>
        <li><a href=""><span className="arrow_pagination to-last"></span></a></li>
      </ul>
    </div>

    {/*<div className="history-inner history-empty">*/}
    {/*  <h3>Здесь будет отображаться история ваших операций</h3>*/}
    {/*</div>*/}

  </div>
}));
