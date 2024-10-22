import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../api/updateUser";
import { eachUserDataType, editUserPropType } from "../type/type";
import FormikForm from "./FormikForm";

function EditUserForm({ user, setShowEditField }: editUserPropType) {
  const queryClient = useQueryClient();
  const initialValues = {
    id: user.id,
    name: user.name,
    email: user.email,
    gender: user.gender,
    status: user.status,
  };
  const mutation = useMutation({
    mutationFn: (updatedUserData: eachUserDataType) =>
      updateUser(user.id, updatedUserData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.log("Error on updating user details", error);
    },
  });

  const onSubmit = (value: eachUserDataType) => {
    mutation.mutate({ ...value });
    setShowEditField(false);
  };

  return (
    <div className="absolute w-[400px] h-[600px] border-[2px] z-10 top-[100px] left-[700px] bg-white">
      <div className="h-full w-full flex flex-col p-[10px]">
        <div className="flex justify-start">
          <button
            className="w-[60px] h-[35px] border-[1px] rounded-[6px] bg-black"
            onClick={() => setShowEditField(false)}
          >
            <span className="text-white font-poppins">Back</span>
          </button>
          <FormikForm initialValues={initialValues} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}
export default EditUserForm;
