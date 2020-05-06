import React from "react";
import {observer, inject} from "mobx-react";
import {useFormik} from "formik";
import {signUpValidation} from "../../../validations/validation";
import {useHistory} from "react-router";
import DialogContent from "@material-ui/core/DialogContent";
import {LoginForm} from "./login.form";
import Dialog from "@material-ui/core/Dialog";
import {SignupForm} from "./signup.form";

export const SignUpPopup = inject("store")(observer(({store, show, toggleModal}) => {
    const history = useHistory();
    const formik = useFormik({
      initialValues: {
        full_name: "",
        phone_number: "",
        email: "",
        password: "",
      },
      onSubmit: values => store.auth.signUp(values, history),
      validationSchema: signUpValidation,
    });
    
    return <Dialog
      maxWidth="xs"
      fullWidth={true}
      open={show}
    >
      <DialogContent className="login">
        <SignupForm toggleModal={toggleModal} formik={formik}/>
      </DialogContent>
    </Dialog>
  })
);
