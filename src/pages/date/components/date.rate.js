import { inject, observer } from "mobx-react";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import React, { useCallback, Fragment, useState } from "react";
import InputMask from "react-input-mask";
// local files
import { DateHistory } from "./date.history";
import { DateBalance } from "./date.balance";
import axiosInstance from "../../../api";
import "./date.rate.scss";
import {DateInfo} from "./date.info";

export const DateRate = inject("store")(
  observer(({ store }) => {
    const { auth } = store;
    const date = new Date();
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const [dateValue, setValue] = useState(`${day}/${month}/20`);
    const [amount, setAmount] = useState(750);
    const [show, setShow] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [showInfo, setInfo] = useState(false);

    const showModal = useCallback(() => {
      if (parseInt(auth.user.balance) < amount) {
        setError("Недостаточно средств, пополните баланс пожалуйста.");
        return;
      }

      setShow(true);
    }, [amount, date]);

    const submit = useCallback(() => {
      const dateV = dateValue.replace(/\//gi, ".");

      axiosInstance
        .post(`bets/make/bet/`, { amount: parseInt(amount), date: dateV })
        .then(() => {
          setShowSuccess(true);
          setShow(false);
          auth.getUser();
          auth.getHistory();

          setTimeout(() => {
            setShowSuccess(false);
          }, 3000);
        });
    }, [amount, date]);

    return (
      <Fragment>
        <Dialog maxWidth="xs" fullWidth={true} open={show}>
          <DialogContent className="modal-form_wrapper">
            <div className="modal __head">
              <span onClick={() => setShow(false)} className="close_modal-head">x</span>
              <h3>Ваша ставка:</h3>
            </div>
            <div className="modal __body">
              <h4>Сумма: <b>{amount}</b></h4>
              <h4>Дата: <b>{dateValue}</b></h4>
              <div className="btn_wrapper">
                <button className="btn btn-confirm __gold" onClick={submit}>
                  Подтвердить
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <div className="date-section">
          <div className="important-info-block">
            <div className="important-info_inner">
              <div className="container">
                <a className="title_important-info" onClick={() => setInfo(!showInfo)}>ВАЖНАЯ ИНФОРМАЦИЯ</a>
              </div>
              {showInfo && <div className="dropdown_important-info">
                <div className="container">
                  <div className="row">
                    <DateInfo />
                  </div>
                </div>
              </div>}
            </div>
          </div>

          <div className="container">
            <div className="flex-wrapper">

              <div className="drum-block">
                <div className="field-wrapper date-entry-block">
                  {showSuccess && <h1 className="success">Вы сделали ставку поздравляем</h1>}
                  <div className="date-entry-inner">
                    <div className="date-field_wrapper">
                      <InputMask
                        onChange={e => setValue(e.target.value)}
                        className="date-field"
                        mask="99/99/99"
                        value={dateValue}/>
                    </div>
                  </div>
                </div>
                {error && (
                  <i onClick={() => setError(null)} className="error">
                    {error}
                  </i>
                )}
                <div className="btns_wrapper">
                  <input
                    className="field_rate"
                    disabled
                    placeholder={`${amount} рублей`}
                  />
                  <button onClick={showModal} className="btn btn_rate __gold">
                    Сделать ставку
                  </button>
                </div>
              </div>

              <DateBalance />

            </div>
          </div>

          <div className="container __small">
            <DateHistory />
          </div>


        </div>
      </Fragment>
    );
  })
);
