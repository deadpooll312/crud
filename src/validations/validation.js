import * as Yup from "yup";
import {emailNotValid, required, passwordMin, balanceInValid} from "../const/auth";

export const signUpValidation = Yup.object().shape({
  email: Yup.string().email(emailNotValid).required(required),
  password: Yup.string().min(4, passwordMin).required(required),
});

export const loginValidation = Yup.object().shape({
  email: Yup.string().email(emailNotValid).required(required),
  password: Yup.string().min(4, passwordMin).required(required),
});

export const balanceValidation = Yup.object().shape({
  balance: Yup.number().moreThan(9, balanceInValid).required(balanceInValid),
});
