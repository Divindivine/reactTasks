export type usersDataType = eachUserDataType[];

export type eachUserDataType = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};

export type userListPropType = {
  user: eachUserDataType;
};

export type newUserFormPropType = {
  setShowNewUserForm: React.Dispatch<React.SetStateAction<boolean>>
}