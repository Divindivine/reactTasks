export type EachUserDataType = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
  imageID?: number;
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
  currentEditingUser: EachUserDataType;
  setShowUserEditForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CurrentUserPropType = {
  currentUser: EachUserDataType;
};

export type PostFieldPropType = {
  currentUser: EachUserDataType;
};

export type eachPostDataType = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};

export type PostOwnerPropType = {
  userID: number;
  currentUser: EachUserDataType;
};

export type CommentFieldPropType = {
  postId: number;
};

export type CommentPropType = {
  postId: number;
};

export type EachCommentType = {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
};
