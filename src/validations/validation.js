import * as Yup from "yup";
import {emailNotValid, required, passwordMin, balanceInValid, balanceMultiple} from "../const/auth";

export const signUpValidation = Yup.object().shape({
  full_name: Yup.string().required(required),
  email: Yup.string().email(emailNotValid).required(required),
  password: Yup.string().min(4, passwordMin).required(required),
});

export const loginValidation = Yup.object().shape({
  email: Yup.string().email(emailNotValid).required(required),
  password: Yup.string().min(4, passwordMin).required(required),
});

export const balanceValidation = Yup.object().shape({
  balance: Yup.number().moreThan(749, balanceMultiple).required(balanceInValid),
});
