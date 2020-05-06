import React, {memo} from "react";
import "./login.scss";

export const LoginForm = memo(({formik, toggleModal}) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <a onClick={() => toggleModal('signup')}>Регистрация</a>
      <h1>Вход</h1>
      <div className="field_wrapper">
        {formik.errors.email && <i>{formik.errors.email}</i>}
        <div className="input-wrapper">
          <input
            id="email"
            onChange={formik.handleChange}
            className="field_form"
            type="text"
            placeholder="E-mail"/>
        </div>
      </div>
      <div className="field_wrapper">
        {formik.errors.password && <i>{formik.errors.password}</i>}
        <div className="input-wrapper">
          <input
            id="password"
            onChange={formik.handleChange}
            className="field_form"
            type="password"
            placeholder="Пароль"/>
        </div>
      </div>
      <div className="btn_wrapper">
        <button className="btn btn-yellow" type="submit">Вход</button>
        <span onClick={() => toggleModal()} className="btn btn-reg" type="submit">Отмена</span>
      </div>
    </form>
  );
});
