import React from "react";
import {observer, inject} from "mobx-react";
import {useFormik} from "formik";
import {signUpValidation} from "../../../validations/validation";
import {useHistory} from "react-router";

export const SignUpPopup = inject("store")(observer(({store}) => {
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

    return <div className="registration_block">
      <form onSubmit={formik.handleSubmit}>
        <div className="field_wrapper">
          <input
            id="full_name"
            className="field_form"
            type="text"
            onChange={formik.handleChange}
            placeholder="ФИО"/>
        </div>
        <div className="field_wrapper">
          <input
            id="phone_number"
            className="field_form"
            onChange={formik.handleChange}
            type="text" placeholder="Мобильный телефон"/>
        </div>
        <div className="field_wrapper">
          {formik.errors.email && <i>{formik.errors.email}</i>}
          <input
            id="email"
            onChange={formik.handleChange}
            className="field_form"
            type="email"
            placeholder="E-mail"/>
        </div>
        <div className="field_wrapper">
          {formik.errors.password && <i>{formik.errors.password}</i>}
          <input
            id="password"
            onChange={formik.handleChange}
            className="field_form"
            type="password"
            placeholder="Пароль"/>
        </div>
        
        <div className="btn_wrapper">
          <button className="btn btn-reg" type="submit">Зарегистрироваться</button>
        </div>
      </form>
      <div className="sub-info_wrapper">
        <span>i</span>
        <p>Ты можешь выбрать любую дату, но только один раз</p>
      </div>
    </div>
  })
);
