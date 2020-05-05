import {inject, observer} from "mobx-react";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import React from "react";
import {useFormik} from "formik";
import {balanceValidation} from "../../../validations/validation";
import {balanceMultiple} from "../../../const/auth";

export const DateFill = inject('store')(observer(({store, show, hidePopup}) => {
  const formik = useFormik({
    initialValues: {
      balance: 0,
    },
    validationSchema: balanceValidation,
    onSubmit: (value, {setErrors}) => {
      const {balance} = value;
      if ((balance % 10) !== 0) {
        return setErrors({balance: balanceMultiple});
      }
      
      store.auth.fill(`${balance}`);
    }
  });

  return <Dialog
    maxWidth="xs"
    fullWidth={true}
    open={show}
  >
    <DialogContent>
      <form onSubmit={formik.handleSubmit}>
        <span>Сумма пополнения</span> <br />
        <input
          id="balance"
          onChange={formik.handleChange}
          type="number"
          placeholder="0"/> <br />
        {formik.errors.balance  &&  <i style={{color: "red"}}>{formik.errors.balance}</i>}
        <p>Сумма пополнения должно быть кратно 10$</p>
        <button type="submit">Пополнить счет</button> <br />

        <span onClick={hidePopup}>отмена</span>
      </form>
    </DialogContent>
  </Dialog>
}));
