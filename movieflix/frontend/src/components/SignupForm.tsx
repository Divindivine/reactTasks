import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import {
  LoginFormPropType,
  userDataType,
  ValidationErrorType,
} from "../type/type";
import { useAddUser } from "../api/userApi/useAddUser";
import show from "../img/show.png";
import hide from "../img/hide.png";

function SignupForm({ setWantSign }: LoginFormPropType) {
  const { mutate, isSuccess } = useAddUser();
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    user_name: "",
    email: "",
    password: "",
  };

  const validate = (userData: userDataType) => {
    const errors: ValidationErrorType = {};

    if (!userData.user_name) errors.user_name = "Name is required";

    if (!/^[A-Za-z\s]*$/.test(userData.user_name))
      errors.user_name = "Name should only contains alphabet";

    if (!userData.email) errors.email = "email is required";

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userData.email))
      errors.email = "Invalid email format";

    if (!userData.password) errors.password = "password is required";

    if (userData.password.length < 8)
      errors.password = "password should atleast contain 8 characters";

    return errors;
  };

  const onSubmit = (userData: userDataType) => {
    mutate(userData);
  };

  if (isSuccess) {
    setWantSign(false);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/4 bg-black flex flex-col p-[40px] py-[100px] rounded-[30px] text-white text-[20px]">
        <span className="text-center text-[34px] font-semibold">
          Create an account
        </span>
        <span className="text-center mt-[10px]">
          Already have an account?{" "}
          <span
            onClick={() => setWantSign(false)}
            className="underline cursor-pointer"
          >
            Log in
          </span>
        </span>

        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="flex flex-col gap-[10px] mt-[30px]">
              <label htmlFor="user_name">User Name</label>
              <Field
                className="bg-transparent border-[1px] h-[60px] rounded-[15px] p-[20px]"
                name="user_name"
                type="text"
              />
              <div className="min-w-[1px] min-h-[30px] text-[#D2122E] font-bold text-[20px]">
                <ErrorMessage name="user_name" />
              </div>
            </div>

            <div className="flex flex-col gap-[10px] ">
              <label htmlFor="email">Email address</label>
              <Field
                className="bg-transparent border-[1px] h-[60px] rounded-[15px] p-[20px]"
                name="email"
                type="email"
              />
              <div className="min-w-[1px] min-h-[30px] text-[#D2122E] font-bold text-[20px]">
                <ErrorMessage name="email" />
              </div>
            </div>

            <div className="flex flex-col gap-[10px]">
              <div className="flex justify-between">
                <label htmlFor="password">Password</label>
                <img
                  className="h-[32px] w-[40px] bg-white rounded-full cursor-pointer"
                  src={showPassword ? hide : show}
                  alt=""
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              </div>
              <Field
                className="bg-transparent border-[1px] h-[60px] rounded-[15px] p-[20px]"
                name="password"
                type={showPassword ? "text" : "password"}
              />
              <div className="min-w-[1px] min-h-[30px] text-[#D2122E] font-bold text-[20px]">
                <ErrorMessage name="password" />
              </div>
            </div>
            <span className="mt-[20px]">
              By creating an account, you agree to our{" "}
              <span className="underline">Terms of use</span> and{" "}
              <span className="underline">Privacy Policy</span>
            </span>
            <button
              className="w-full bg-[#D2122E] p-[15px] rounded-[10px] text-[25px] font-bold mt-[40px] hover:bg-[#B31B1B]"
              type="submit"
            >
              Create account
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default SignupForm;
