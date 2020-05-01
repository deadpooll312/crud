import React, { memo } from "react";
import { Link } from "react-router-dom";

export const SignupForm = ({ formik }) => (
  <div className="container">
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
        {formik.errors.email && formik.touched.email && (
          <div>{formik.errors.email}</div>
        )}
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
        {formik.errors.password && formik.touched.password && (
          <div>{formik.errors.password}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password_confirm">Confirm Password:</label>
        <input
          type="text"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.password_confirm}
          placeholder="Enter password"
          id="password_confirm"
        />
        {formik.errors.password_confirm && formik.touched.password_confirm && (
          <div>{formik.errors.password_confirm}</div>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    <Link to="/login">Войти</Link>
  </div>
);
