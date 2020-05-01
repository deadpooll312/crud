import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";
import { useFormik } from "formik";
// local files
import { loginValidation } from "../../validations/validation";
import { LoginForm } from "./components/login.form";

export const LoginPage = inject("store")(
  observer(({ store, history }) => {
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => store.auth.signIn(values),
      validationSchema: loginValidation,
    });

    useEffect(() => {
      if (store.auth.token) {
        history.push("/");
      }
    }, [store.auth.token]);

    return <LoginForm formik={formik} />;
  })
);
