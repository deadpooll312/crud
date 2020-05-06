import {inject, observer} from "mobx-react";
import React from "react";

export const DatePromocode = inject('store')(observer(({store}) => {
  const {auth} = store;

  return <div className="promocode-personal">
    <h3 className="title" style={{textAlign: "center"}}>Ваш промокод</h3>
    <div className="field_wrapper">
      <input className="promocode_field" type="text" disabled placeholder={auth.user.promo_code}/>
    </div>
  </div>
}));
