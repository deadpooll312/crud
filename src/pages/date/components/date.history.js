import React, {useCallback, useEffect, useState} from "react";
import {inject, observer} from "mobx-react";
import Pagination from "react-js-pagination";

export const DateHistory = inject('store')(observer(({store}) => {
  const {auth} = store;
  const [activePage, setPage] = useState(1);
  const pageSize = 3;
  
  useEffect(() => {
    auth.getHistory({page: activePage, pageSize});
  }, [activePage]);
  
  const handlePageChange = useCallback((page) => {
    setPage(page);
  });

  return <div className="history-block">
    <h3 className="title">История операций</h3>
    {auth.data.results && auth.data.results.length ? <div className="history-inner">
      <div className="list_date">
        {auth.data.results.map((item, index) => {
          return <div key={index} className="item_date">
            {
              item.transaction_type === 'BET_TRANSACTION'
                ? <p className="title_item">Ставка <b>{item.amount}</b> на <b>01.07.20</b></p>
                : <p className="title_item">Пополнение баланса на <b>{item.amount}</b></p>
            }
            <span className="date_item">{item.created_at}</span>
          </div>
        })}
      </div>
      {auth.data.count > pageSize && <Pagination
        activePage={activePage}
        itemsCountPerPage={pageSize}
        totalItemsCount={auth.data.count}
        onChange={e => handlePageChange(e)}
        itemClassFirst="to-first"
        itemClassPrev="to-previous"
        itemClassNext="to-next"
        itemClassLast="to-last"
      />}
    </div>
      : <div className="history-inner history-empty">
        <h3>Здесь будет отображаться история ваших операций</h3>
      </div>
    }
  </div>
}));
