import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { getSingleUser } from "../api/getUser";
import { updateUser } from "../api/updateUser";
import { eachUserDataType, editUserPropType } from "../type/type";
import { validate } from "../utils/common";

function EditUserForm({ id, setShowEditField }: editUserPropType) {
  const queryClient = useQueryClient();

  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getSingleUser(id),
  });
  const [initialValues, setIntialValues] = useState<eachUserDataType | {}>(
    {} as eachUserDataType
  );
  useEffect(() => {
    if (userData) {
      setIntialValues({
        id: userData.id,
        name: userData.name,
        email: userData.email,
        gender: userData.gender,
        status: userData.status,
      });
    }
  }, [userData]);
  if (isLoading) {
    return <div>Loading user data</div>;
  }
  if (isError) {
    return <div>Error Loading user data</div>;
  }

  // const mutation = useMutation({
  //   mutationFn: () => updateUser(id, userData),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["users"] });
  //   },
  //   onError: (error) => {
  //     console.log("Error adding user: ",error)
  // }
  // });

  const onSubmit = (value: eachUserDataType) => {
    // mutation.mutate()
    setShowEditField(false);
  };

  return <div></div>;
}
export default EditUserForm;
