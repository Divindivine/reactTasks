import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addNewUser } from "../api/addNewUser";
import { eachUserDataType, newUserFormPropType } from "../type/type";
import { validate } from "../utils/common";

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
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="flex flex-col mt-[100px] gap-[40px]">
                <div className="flex gap-[10px]">
                  <label>name</label>
                  <Field className="border-[2px]" name="name" type="text" />

                  <ErrorMessage name="name" />
                </div>
                <div className="flex gap-[10px]">
                  <label>email</label>
                  <Field className="border-[2px]" name="email" type="email" />
                </div>
                <div className="flex gap-[10px]">
                  <label>gender</label>
                  <Field className="border-[2px]" name="gender" type="text" />
                </div>
                <div className="flex w-full justify-center">
                  <button
                    className="border-[2px] text-white w-[80px] h-[35px] bg-black rounded-[8px]"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default NewUserForm;
