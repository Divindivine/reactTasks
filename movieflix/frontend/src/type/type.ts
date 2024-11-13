export type LoginUserDataType = {
  email: string;
  password: string;
};

export type userDataType = {
  user_name: string;
  email: string;
  password: string;
};

export type ValidationErrorType = {
  user_name?: string;
  email?: string;
  password?: string;
};

export type LoginFormPropType = {
  setWantSign: React.Dispatch<React.SetStateAction<boolean>>;
};
