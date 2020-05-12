import {inject, observer} from "mobx-react";
import React from "react";

export const DateInfo = inject('store')(observer(({store, show, hidePopup}) => {
  return <div className="info-personal">
    <div className="info-item">
      <div className="img-wrapper">
      </div>
      <p>Делай ставки на несколько дат и увеличивай свои шансы на победу!</p>
    </div>
    <div className="info-item">
      <div className="img-wrapper">
      </div>
      <p>Твой выбор фиксируется в распределительном реестре блокчейн: его нельзя подделать или изменить!</p>
    </div>
    <div className="info-item">
      <div className="img-wrapper">
      </div>
      <p>Принимай участие в реферальной программе и получай 50% от выигрыша вашего реферала в случае его победы! <a href="#">Подробнее</a></p>
    </div>
  </div>
}));
