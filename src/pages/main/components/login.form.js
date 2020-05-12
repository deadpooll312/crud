import React, {memo} from "react";
import "./login.scss";

export const LoginForm = memo(({formik, toggleModal}) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="modal __head">
        <span onClick={() => toggleModal()} className="close_modal-head" type="submit">x</span>
        <h3>Вход</h3>
        <a className="link_modal-head" onClick={() => toggleModal('signup')}>Регистрация</a>
      </div>
      <div className="modal __body">
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
          <button className="btn btn-log-in __gold" type="submit">Вход</button>
        </div>
      </div>
    </form>
  );
});
