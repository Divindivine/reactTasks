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
  setShowNewUserForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export type editUserPropType = {
  id: number;
  setShowEditField: React.Dispatch<React.SetStateAction<boolean>>
};

export type currentUserDetailsPropType = {
  currentUser: eachUserDataType;
  setShowCurrentUserDetails: React.Dispatch<React.SetStateAction<boolean>>
}