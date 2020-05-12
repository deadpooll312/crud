import {inject, observer} from "mobx-react";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import React from "react";
import {useFormik} from "formik";
import {balanceValidation} from "../../../validations/validation";

export const DateFill = inject('store')(observer(({store, show, hidePopup}) => {
  const formik = useFormik({
    initialValues: {
      balance: 0,
    },
    validationSchema: balanceValidation,
    onSubmit: (value, {setErrors}) => {
      const {balance} = value;
      // if (balance && !isNaN(parseInt(balance)) && parseInt(balance) < 750) {
      //   return setErrors({balance: balanceMultiple});
      // }
      // if ((balance % 10) !== 0) {
      //   return setErrors({balance: balanceMultiple});
      // }
      store.auth.fill(`${balance}`);
      hidePopup();
    }
  });
  
  return <Dialog
    maxWidth="xs"
    fullWidth={true}
    open={show}
  >
    <DialogContent className="modal-form_wrapper">
      <form onSubmit={formik.handleSubmit}>
        <div className="modal __head">
          <span onClick={hidePopup} className="close_modal-head" type="submit">x</span>
          <h3>Пополнение счета</h3>
        </div>
        <div className="modal __body">
          <div className="field_wrapper">
            {formik.errors.balance && <i>{formik.errors.balance}</i>}
            <div className="input-wrapper">
              <input
                id="balance"
                onChange={formik.handleChange}
                className="field_form"
                type="number"
                placeholder="0"/>
            </div>
          </div>
          <p>Сумма пополнения производится в рублях мимимальная сумма 750 рублей</p>
          <div className="btn_wrapper">
            <button className="btn btn-pour-in __gold" type="submit">Пополнить счет</button>
          </div>
        </div>
      </form>
    </DialogContent>
  </Dialog>
}));
