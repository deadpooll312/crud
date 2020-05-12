import React from "react";

export const SignupForm = ({formik, toggleModal}) => (
  <form onSubmit={formik.handleSubmit}>
    <div className="modal __head">
      <span onClick={() => toggleModal()} className="close_modal-head" type="submit">x</span>
      <h3>Регистрация</h3>
      <a className="link_modal-head" onClick={() => toggleModal('login')}>Вход</a>
    </div>
    <div className="modal __body">
      <div className="field_wrapper">
        {formik.touched && formik.errors.full_name && <i>{formik.errors.full_name}</i>}
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
        {formik.touched && formik.errors.phone_number && <i>{formik.errors.phone_number}</i>}
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
        {formik.touched && formik.errors.email && <i>{formik.errors.email}</i>}
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
        {formik.touched && formik.errors.password && <i>{formik.errors.password}</i>}
        <div className="input-wrapper">
          <input
            id="password"
            onChange={formik.handleChange}
            className="field_form"
            type="password"
            placeholder="Пароль"/>
        </div>
      </div>
      <div className="field_wrapper">
        <div className="input-wrapper">
          <input
            id="promo_code"
            onChange={formik.handleChange}
            className="field_form"
            type="text"
            placeholder="Промо код"/>
        </div>
      </div>
      <p>Нажимая на кнопку «зарегистрироваться», вы атоматически соглашаетесь <a href="#">с политикой
        конфиденциальности</a></p>
      <div className="btn_wrapper">
        <button className="btn btn-log-in __gold" type="submit">Зарегистрироваться</button>
      </div>
    </div>
  </form>
);
