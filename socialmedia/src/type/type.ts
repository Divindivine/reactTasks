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
  users: userListPropType;
};

export type newUserFormPropType = {
  setShowNewUserForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export type editUserPropType = {
  user: eachUserDataType
  setShowEditField: React.Dispatch<React.SetStateAction<boolean>>;
};

export type currentUserDetailsPropType = {
  currentUser: eachUserDataType;
  setShowCurrentUserDetails: React.Dispatch<React.SetStateAction<boolean>>;
};

export type eachPostType = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};

export type homePagePropsType = {
  state: {
    user: eachUserDataType;
    users: eachUserDataType[];
  };
};

export type postPropTypes = {
  users: eachUserDataType[];
};

export type commentsPropType = {
  post: eachPostType;
};

export type eachCommentType = {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
};

export type formikFormPropType = {
  initialValues: eachUserDataType;
  onSubmit: (value: eachUserDataType) => void;
};
