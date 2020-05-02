import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";
import { useFormik } from "formik";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
// local files
import { signUpValidation } from "../../../validations/validation";
import { SignupForm } from "./signup.form";

export const SignUpPopup = inject("store")(observer(({ store, show, toggleModal }) => {
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
        password_confirm: "",
      },
      onSubmit: values => store.auth.signUp(values),
      validationSchema: signUpValidation,
    });

    useEffect(() => {
      if (store.auth.token) {
        console.log('close popup');
        // history.push('/');
      }
    }, [store.auth.token]);

    return <Dialog
      maxWidth="xs"
      fullWidth={true}
      open={show}
    >
      <DialogContent>
        <SignupForm formik={formik} toggleModal={toggleModal} />
      </DialogContent>
    </Dialog>
  })
);
