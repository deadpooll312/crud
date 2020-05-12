import React from "react";
import {observer, inject} from "mobx-react";
import {useFormik} from "formik";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
// local files
import {loginValidation} from "../../../validations/validation";
import {LoginForm} from "./login.form";
import {useHistory} from "react-router";

export const LoginPopup = inject("store")(observer(({store, show, toggleModal}) => {
    const history = useHistory();
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => store.auth.signIn(values, history),
      validationSchema: loginValidation,
    });
    
    return <Dialog
      maxWidth="xs"
      fullWidth={true}
      open={show}
    >
      <DialogContent className="login modal-form_wrapper">
        <LoginForm toggleModal={toggleModal} formik={formik}/>
      </DialogContent>
    </Dialog>
  })
);
