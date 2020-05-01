import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";
import { useFormik } from "formik";
// local files
import { signUpValidation } from "../../validations/validation";
import { SignupForm } from "./components/signup.form";

export const SignUpPage = inject("store")(observer(({ store, history }) => {
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
        history.push('/');
      }
    }, [store.auth.token]);

    return <SignupForm formik={formik} />
  })
);
