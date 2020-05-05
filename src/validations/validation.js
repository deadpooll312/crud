import * as Yup from "yup";
import { emailNotValid, required, passwordMin, passwordNotEqual } from "../const/auth";

export const signUpValidation = Yup.object().shape({
  email: Yup.string().email(emailNotValid).required(required),
  password: Yup.string().min(4, passwordMin).required(required),
});

export const loginValidation = Yup.object().shape({
  email: Yup.string().email(emailNotValid).required(required),
  password: Yup.string().min(4, passwordMin).required(required),
});
