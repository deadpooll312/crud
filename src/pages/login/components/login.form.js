import React, {memo} from 'react';
import { Link } from "react-router-dom";
import "./login.form.scss";

export const LoginForm = memo(({formik}) => {
  return <div className="container">
  <form onSubmit={formik.handleSubmit}>
    <div className="form-group">
      <label htmlFor="email">Email address:</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter email"
        onChange={formik.handleChange}
        value={formik.values.email}
        id="email"
      />
      {formik.errors.email && formik.touched.email && <div>{formik.errors.email}</div>}
    </div>
    <div className="form-group">
      <label htmlFor="password">Password:</label>
      <input
        type="text"
        onChange={formik.handleChange}
        value={formik.values.password}
        className="form-control"
        placeholder="Enter password"
        id="password"
      />
      {formik.errors.password && formik.touched.password && <div>{formik.errors.password}</div>}
    </div>
    <button type="submit" onClick={formik.handleSubmit}  className="btn btn-primary">Submit</button>
  </form>
  <Link to="/signup">Регистрация</Link>
</div>
});