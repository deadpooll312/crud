import React from "react";
import { InputComponent } from "../../../components/input";
import { ButtonComponent } from "../../../components/button";
import { LOGIN } from "../../../const/popup.const";

export const SignupForm = ({ formik, toggleModal }) => (
  <form className="login" onSubmit={formik.handleSubmit}>
    <div className="title"><h2>Регистрация</h2><span onClick={() => toggleModal(LOGIN)}>Войти</span></div>
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
    <InputComponent
      id="password_confirm"
      error={formik.errors.password_confirm}
      label="Password Confirm"
      onChange={formik.handleChange}
    />
    <ButtonComponent
      text="Регистрация"
      type="submit"
      fullWidth
      margin
      gradient
    />
    <ButtonComponent onClick={toggleModal} text="Отмена" fullWidth />
    <p>Нажимая на кнопку «зарегистрироваться», вы атоматически соглашаетесь <a href="#">с политикой конфиденциальности</a></p>
  </form>
);
