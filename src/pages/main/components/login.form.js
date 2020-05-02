import React, { memo } from "react";
// local files
import {InputComponent} from '../../../components/input';
import {SIGNUP} from '../../../const/popup.const';
import {ButtonComponent } from "../../../components/button";

export const LoginForm = memo(({ formik, toggleModal }) => {
  return (
    <div className="login">
      <form onSubmit={formik.handleSubmit} noValidate autoComplete="off">
        <div className="title"><h2>Вход</h2><span onClick={() => toggleModal(SIGNUP)}>Регистрация</span></div>
        <InputComponent
          id="email"
          error={formik.errors.email}
          label="E-mail"
          onChange={formik.handleChange}
          />
        <InputComponent
          id="password"
          error={formik.errors.password}
          label="Password"
          onChange={formik.handleChange}
          />
        <ButtonComponent text="Войти" type="submit" fullWidth margin gradient/>
        <ButtonComponent onClick={() => toggleModal()} text="Отмена" fullWidth/>
      </form>
    </div>
  );
});
