import React from "react";

export const SignupForm = ({formik, toggleModal}) => (
  <form onSubmit={formik.handleSubmit}>
    <a onClick={() => toggleModal('login')}>Вход</a>
    <h1>Регистрация</h1>
    <div className="field_wrapper">
      {formik.errors.full_name && <i>{formik.errors.full_name}</i>}
      <div className="input-wrapper">
        <input
          id="full_name"
          onChange={formik.handleChange}
          className="field_form"
          type="text"
          placeholder="Иванов Павел Алексеевич"/>
      </div>
    </div>
    <div className="field_wrapper">
      {formik.errors.phone_number && <i>{formik.errors.phone_number}</i>}
      <div className="input-wrapper">
        <input
          id="phone_number"
          onChange={formik.handleChange}
          className="field_form"
          type="text"
          placeholder="+7*********"/>
      </div>
    </div>
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
    <p>Нажимая на кнопку «зарегистрироваться», вы атоматически соглашаетесь <a href="#">с политикой
      конфиденциальности</a></p>
    <div className="btn_wrapper">
      <button className="btn btn-yellow" type="submit">Зарегистрироваться</button>
      <span onClick={() => toggleModal()} className="btn btn-reg" type="submit">Отмена</span>
    </div>
  </form>
);
