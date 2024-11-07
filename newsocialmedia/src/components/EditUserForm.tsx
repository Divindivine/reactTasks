import React from "react";
import { usePutUser } from "../api/usePutUser";
import { EachUserDataType, EditUserFormPropType } from "../type/type";
import BackButton from "./BackButton";
import FormikForm from "./FormikForm";

function EditUserForm({
  currentEditingUser,
  setShowUserEditForm,
}: EditUserFormPropType) {
  const editUser = usePutUser();

  const initialValues = {
    id: currentEditingUser.id,
    name: currentEditingUser.name,
    email: currentEditingUser.email,
    gender: currentEditingUser.gender,
    status: currentEditingUser.status,
  };

  const onSubmit = (userData: EachUserDataType) => {
    editUser.mutate(userData);
    setShowUserEditForm(false);
  };

  return (
    <div className="w-1/4 h-2/3 absolute z-10 bg-white flex flex-col items-center rounded-[20px] p-[20px] gap-[50px]">
      <div className="w-full flex">
        <div onClick={()=> setShowUserEditForm(false)}>
            <BackButton />
        </div>
      </div>
      <span className="text-[30px] font-bold">Edit your Details</span>
      <FormikForm initialValues={initialValues} onSubmit={onSubmit} />
    </div>
  );
}

export default EditUserForm;
