export type EachUserDataType = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};

export type ShowUsersPropType = {
  data: EachUserDataType[];
};

export type NewUserFormPropType = {
  setShowNewUserForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export type FormikFormPropType = {
  initialValues: EachUserDataType;
  onSubmit: (userData: EachUserDataType) => void;
};

export type ValidationErrorType = {
  name?: string;
  email?: string;
  gender?: string;
};

export type EditUserFormPropType = {
  currentEditingUser: EachUserDataType,
  setShowUserEditForm: React.Dispatch<React.SetStateAction<boolean>>;
}