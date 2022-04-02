export type TSignIn = {
  email: string;
  password: string;
};
export type TSignUp = {
  email: string;
  password: string;
};
export type TSignUpYup = {
  email: string;
  password: string;
  newsletter: boolean;
  perdata: boolean;
};
export type TForgotPassword4Yup = {
  email: string;
};
export type TResetPassword4Yup = {
  email: string;
  password1: string;
  password2: string;
};
export type TUpdatePassword = {
  oldpassword: string;
  newpassword1: string;
  newpassword2: string;
};
