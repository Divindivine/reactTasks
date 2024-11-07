import { EachUserDataType, NewUserFormPropType } from "../type/type";
import BackButton from "./BackButton";
import FormikForm from "./FormikForm";
import { usePostUser } from "../api/usePostUser";

function NewUserForm({ setShowNewUserForm }: NewUserFormPropType) {
  const addUser = usePostUser();

  const initialValues = {
    id: Math.floor(100000 + Math.random() * 900000),
    name: "",
    email: "",
    gender: "",
    status: "active",
  };

  const onSubmit = (userData: EachUserDataType) => {
    addUser.mutate(userData);
    setShowNewUserForm(false)
  }
    return (
    <div className="w-1/4 h-2/3 absolute z-10  bg-white flex flex-col items-center rounded-[20px] p-[20px] gap-[50px]">
      <div className="w-full flex ">
        <div onClick={() => setShowNewUserForm(false)}>
          <BackButton />
        </div>
      </div>
      <span className="text-[30px] font-bold">Enter your details </span>
      <FormikForm initialValues={initialValues} onSubmit={onSubmit} />
    </div>
  );
}

export default NewUserForm;
