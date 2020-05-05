import React, {memo} from "react";

export const LoginForm = memo(({ formik, toggleModal }) => {
  return (
    <div className="login">
      <form onSubmit={formik.handleSubmit}>
        <div className="field_wrapper">
          {formik.errors.email && <i>{formik.errors.email}</i>}
          <input
            id="email"
            onChange={formik.handleChange}
            className="field_form"
            type="text"
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
          <button className="btn btn-reg" type="submit">Вход</button>
          <span onClick={toggleModal} className="btn btn-reg" type="submit">Отмена</span>
        </div>
      </form>
    </div>
  );
});
