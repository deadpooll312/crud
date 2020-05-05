import React from "react";
import {inject, observer} from "mobx-react";

export const DateHistory = inject('store')(observer(({store}) => {
  return <div className="history-block">
    <h3 className="title">История ставок</h3>
    <div className="history-inner">
      <div className="list_date">
        <div className="item_date">
          <p>Пополнение баланса на <b>135$</b></p>
          <span>04.05.2020</span>
        </div>
        <div className="item_date">
          <p>Пополнение баланса на <b>135$</b></p>
          <span>04.05.2020</span>
        </div>
        <div className="item_date">
          <p>Ставка 10$ на <b>01.07.20</b></p>
          <span>04.05.2020</span>
        </div>
      </div>
      <ul className="pagination" role="menubar" aria-label="Pagination">
        <li><a href=""><span>First</span></a></li>
        <li><a href=""><span>Previous</span></a></li>
        <li><a href="">1</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
        <li className="active"><a href="">4</a></li>
        <li><a href=""><span>Next</span></a></li>
        <li><a href=""><span>Last</span></a></li>
      </ul>
    </div>
  </div>
}));
