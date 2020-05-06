import {inject, observer} from "mobx-react";
import React from "react";

export const DateInfo = inject('store')(observer(({store, show, hidePopup}) => {
  return <div className="info-personal">
    <div className="info-item">
      <div className="img-wrapper">
      </div>
      <p>Твой выбор нельзя подделать или изменить!</p>
    </div>
    <div className="info-item">
      <div className="img-wrapper">
      </div>
      <p>Каждый привлеченный участник получает 50% от выигрыша того, кто привлек и наоборот, в случае
        ПОБЕДЫ!</p>
    </div>
    <div className="info-item">
      <div className="img-wrapper">
      </div>
      <p>Данные всех пользователей в распределенном реестре. Их нельзя удалить или подделать данные публично
        доступны по ссылке:</p>
    </div>
  </div>
}));
