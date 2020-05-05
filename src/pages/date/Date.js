import React, {Fragment, useEffect} from 'react';
import {inject, observer} from "mobx-react";
import {DateBalance} from "./components/date.balance";
import {DateHistory} from "./components/date.history";
import InputMask from 'react-input-mask';

export const Date = inject("store")(observer(({store, props}) => {
  useEffect(() => {
    store.auth.getUser();
  }, [store.auth]);
  
  return <Fragment>
    <div className="date-section">
      <div className="container">
        <div className="flex-wrapper">
          <DateHistory/>
          <DateBalance/>
        </div>
      </div>
      <div className="container container_small">
        <div className="field-wrapper date-entry-block">
          <div className="date-entry-inner">
            <InputMask className="date-field" mask="99/99/99" />
          </div>
        </div>
        <div className="btns_wrapper">
          <button className="btn btn-bet">Введите сумму ставки</button>
          <button className="btn btn-date active">Сделать ставку</button>
        </div>
      </div>
    </div>

    <div className="personal-data-section">
      <div className="container">
        <div className="flex-wrapper">
          <div className="data-personal">
            <h3 className="title">Личные данные</h3>
            <div className="item_data">
              <div className="sub-title">ФИО</div>
              <h5>Иванов Павел Александрович</h5>
            </div>
            <div className="item_data">
              <div className="sub-title">E-mail</div>
              <h5>email.example@mail.ru</h5>
            </div>
            <div className="item_data">
              <div className="sub-title">Телефон</div>
              <h5>email.example@mail.ru</h5>
            </div>
          </div>
          <div className="promocode-personal">
            <h3 className="title">Ваш промокод</h3>
            <div className="field_wrapper">
              <input className="promocode_field" type="text" placeholder="Введите MRIP код из письма"/>
            </div>
            <div className="btn_wrapper">
              <button className="btn btn-share">Поделиться
                <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M17.7086 19.9999H2.29203C1.02785 19.9999 0.000488281 18.9724 0.000488281 17.7084V5.62504C0.000488281 4.36086 1.02785 3.3335 2.29203 3.3335H5.20872C5.55372 3.3335 5.83371 3.61349 5.83371 3.95849C5.83371 4.30349 5.55372 4.58348 5.20872 4.58348H2.29203C1.71785 4.58348 1.25048 5.05086 1.25048 5.62504V17.7084C1.25048 18.2824 1.71785 18.7499 2.29203 18.7499H17.7086C18.2828 18.7499 18.7503 18.2824 18.7503 17.7084V10.625C18.7503 10.28 19.0303 10 19.3753 10C19.7203 10 20.0003 10.28 20.0003 10.625V17.7084C20.0003 18.9724 18.9728 19.9999 17.7086 19.9999Z" fill="white"/>
<path d="M5.62408 13.3226C5.5783 13.3226 5.53237 13.3176 5.4866 13.3058C5.20416 13.2401 5 12.9984 5 12.7085V11.4585C5 6.97854 8.64498 3.33356 13.1249 3.33356H13.3332V0.625147C13.3332 0.370176 13.4882 0.140991 13.7249 0.0451666C13.9606 -0.0497421 14.2315 0.00763032 14.4082 0.191802L19.8248 5.81675C20.0581 6.05844 20.0581 6.44174 19.8248 6.68344L14.4082 12.3084C14.2315 12.4926 13.959 12.5493 13.7249 12.455C13.4882 12.3592 13.3332 12.13 13.3332 11.875V9.16678H12.3432C9.72163 9.16678 7.3657 10.6234 6.19414 12.9676C6.08657 13.1842 5.86074 13.3226 5.62408 13.3226ZM13.1249 4.58354C9.62489 4.58354 6.72667 7.21261 6.30248 10.6C7.81735 8.91013 9.98988 7.91679 12.3432 7.91679H13.9582C14.3032 7.91679 14.5832 8.19679 14.5832 8.54179V10.3251L18.5073 6.25009L14.5832 2.17512V3.95855C14.5832 4.30355 14.3032 4.58354 13.9582 4.58354H13.1249Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg></span>
              </button>
            </div>
          </div>
          <div className="info-personal">
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
        </div>
      </div>
    </div>
    
    {/*<div className="information-tooltip">*/}
    {/*  <div className="close-icon">x</div>*/}
    {/*  <p><span>i</span> Для этого вам необходимо пополнить баланс</p>*/}
    {/*</div>*/}

    <div className="pour-in_modal-wrapper delete-class">
      <div className="pour-in_modal">
        <h3>Пополнение баланса</h3>
        <input className="pour-in-field" type="text"/>
        <div className="btns-wrapper">
          <button className="btn btn-pour-in">Пополнить</button>
          <button className="btn btn-cancel">Отмена</button>
        </div>
      </div>
    </div>

  </Fragment>
}));
