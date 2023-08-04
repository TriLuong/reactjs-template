export interface IConstants {}

interface IModel {
  id: string;
  created_at: number;
  updated_at: number;
  deleted_at: number;
}

export interface IUser extends IModel {
  name: string;
  email: string;
}

export interface ILoginResponse {
  token: string;
  user: IUser;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm {
  email: string;
  password: string;
}

export interface IRegisterResponse extends ILoginResponse {}

export interface ISendEmailOTPForm {
  email?: string;
}

export interface IVerifyEmailOTPForm {
  otp: string;
}

export interface IForgotPasswordForm {
  otp: string;
}

export interface IMenuItem {
  id: string;
  icon?: string;
  iconDetails?: string;
  name?: string;
  nameDetails?: string;
  route: string;
  breadcrumbParentId?: string;
  menuParentId?: string;
}

export type IMenus = IMenuItem[];
