import * as yup from 'yup';

import {
  TSignIn,
  TSignUpYup,
  TForgotPassword4Yup,
  TResetPassword4Yup,
  TUpdatePassword,
} from '@/utils/lib/types';

export const clientSignInSchema: yup.SchemaOf<TSignIn> = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address!')
    .required('Please enter a valid email address!'),
  password: yup
    .string()
    .required('Enter your password')
    .matches(
      /^.*(?=.{8})(?=.*\d)(?=.*[a-zA-Z]).*$/,
      'Password must contain min 8 chars with letters and numbers!'
    ),
});
export const clientSignUpSchema: yup.SchemaOf<TSignUpYup> = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address!')
    .required('Please enter a valid email address!'),
  password: yup
    .string()
    .required('Enter your password')
    .matches(
      /^.*(?=.{8})(?=.*\d)(?=.*[a-zA-Z]).*$/,
      'Password must contain min 8 chars with letters and numbers!'
    ),
  newsletter: yup.boolean().required().oneOf([true, false]),
  perdata: yup.boolean().required().oneOf([true, false]),
});
export const clientupdatePasswordSchema: yup.SchemaOf<TUpdatePassword> = yup
  .object()
  .shape({
    oldpassword: yup
      .string()
      .required('Please enter your password!')
      .matches(
        /^.*(?=.{8})(?=.*\d)(?=.*[a-zA-Z]).*$/,
        'Password must contain min 8 chars with letters and numbers!'
      ),
    newpassword1: yup
      .string()
      .required('Please enter your NEW password!')
      .matches(
        /^.*(?=.{8})(?=.*\d)(?=.*[a-zA-Z]).*$/,
        'Password must contain min 8 chars with letters and numbers!'
      ),
    newpassword2: yup
      .string()
      .required('Please enter again your NEW password!')
      .matches(
        /^.*(?=.{8})(?=.*\d)(?=.*[a-zA-Z]).*$/,
        'Password must contain min 8 chars with letters and numbers!'
      ),
  });
export const clientResetPasswordSchema: yup.SchemaOf<TResetPassword4Yup> = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('Please enter a valid email address!')
      .required('Please enter a valid email address!'),
    password1: yup
      .string()
      .required('Please enter your NEW password!')
      .matches(
        /^.*(?=.{8})(?=.*\d)(?=.*[a-zA-Z]).*$/,
        'Password must contain min 8 chars with letters and numbers!'
      ),
    password2: yup
      .string()
      .required('Please enter again your NEW password!')
      .matches(
        /^.*(?=.{8})(?=.*\d)(?=.*[a-zA-Z]).*$/,
        'Password must contain min 8 chars with letters and numbers!'
      ),
  });
export const forgotPasswordSchema: yup.SchemaOf<TForgotPassword4Yup> = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('Please enter a valid email address!')
      .required('Please enter a valid email address!'),
  });
