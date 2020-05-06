import {inject, observer} from "mobx-react";
import React from "react";

export const DateUser = inject('store')(observer(({store, show, hidePopup}) => {
  const {auth} = store;
  return <div className="data-personal">
    <h3 className="title">Личные данные</h3>
    <div className="item_data">
      <div className="sub-title">ФИО</div>
      <h5>{auth.user.full_name}</h5>
    </div>
    <div className="item_data">
      <div className="sub-title">E-mail</div>
      <h5>{auth.user.email}</h5>
    </div>
    <div className="item_data">
      <div className="sub-title">Телефон</div>
      <h5>{auth.user.phone_number}</h5>
    </div>
  </div>
}));
