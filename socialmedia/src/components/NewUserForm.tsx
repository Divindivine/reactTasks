import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewUser } from "../api/addNewUser";
import { eachUserDataType, newUserFormPropType } from "../type/type";
import FormikForm from "./FormikForm";

function NewUserForm({ setShowNewUserForm }: newUserFormPropType) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addNewUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.log("Error adding user:", error);
    },
  });

  const initialValues = {
    id: Math.floor(100000 + Math.random() * 900000),
    name: "",
    email: "",
    gender: "",
    status: "active",
  };

  const onSubmit = (value: eachUserDataType) => {
    mutation.mutate({ ...value });
    setShowNewUserForm(false);
  };
  return (
    <div className="absolute w-[400px] h-[600px] border-[2px] z-10 top-[100px] left-[700px] bg-white">
      <div className="h-full w-full flex flex-col p-[10px]">
        <div className="flex justify-start">
          <button
            className="w-[60px] h-[35px] border-[1px] rounded-[6px] bg-black"
            onClick={() => setShowNewUserForm(false)}
          >
            <span className="text-white font-poppins">Back</span>
          </button>
          <FormikForm initialValues={initialValues} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}

export default NewUserForm;
