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

export const DateRate = inject("store")(
  observer(({ store }) => {
    const { auth } = store;
    const date = new Date();
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const [dateValue, setValue] = useState(`${day}/${month}/20`);
    const [amount, setAmount] = useState(100);
    const [show, setShow] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState(null);

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

          setTimeout(() => {
            setShowSuccess(false);
          }, 3000);
        });
    }, [amount, date]);

    return (
      <Fragment>
        <Dialog maxWidth="xs" fullWidth={true} open={show}>
          <DialogContent className="login">
            <h1>Ваша ставка:</h1>
            <p>Сумма: {amount}</p>
            <p>Дата: {dateValue}</p>
            <div className="btn_wrapper">
              <button className="btn btn-yellow" onClick={submit}>
                Подтвердить
              </button>
              <span onClick={() => setShow(false)} className="btn btn-reg">
                Отмена
              </span>
            </div>
          </DialogContent>
        </Dialog>

        <div className="date-section">
          <div className="container">
            <div className="flex-wrapper">
              <DateHistory />
              <DateBalance />
            </div>
          </div>

          <div className="container __small __drum-block">
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
        </div>
      </Fragment>
    );
  })
);
