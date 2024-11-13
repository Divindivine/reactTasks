import React, { useState } from "react";
import { useGetUser } from "../api/userApi/useGetUser";
import show from "../img/show.png";
import hide from "../img/hide.png";
import { useNavigate } from "react-router-dom";
import { LoginFormPropType } from "../type/type";

function LoginForm({ setWantSign }: LoginFormPropType) {
  const navigate = useNavigate();
  const { mutate, isSuccess } = useGetUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitClicked = () => {
    const userDetail = {
      email: email,
      password: password,
    };
    mutate(userDetail);
  };
  if (isSuccess) {
    navigate("/home");
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/4 bg-black flex flex-col p-[40px] py-[100px] rounded-[30px] text-white text-[20px]">
        <span className="text-center text-[34px] font-semibold">Log in</span>
        <span className="text-center mt-[10px]">
          Don't have an account?{" "}
          <span
            onClick={() => setWantSign(true)}
            className="underline cursor-pointer"
          >
            Sign up
          </span>
        </span>
        <div className="flex flex-col gap-[10px] mt-[30px]">
          <label htmlFor="email">Email address</label>
          <input
            className="bg-transparent border-[1px] h-[60px] rounded-[15px] p-[20px]"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[10px] mt-[30px]">
          <div className="flex justify-between">
            <label htmlFor="password">Password</label>

            <img
              className="h-[32px] w-[40px] bg-white rounded-full cursor-pointer"
              src={showPassword ? hide : show}
              alt=""
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>
          <input
            className="bg-transparent border-[1px] h-[60px] rounded-[15px] p-[20px]"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <span className="mt-[20px]">
          By continuing, you agree to the{" "}
          <span className="underline">Term of use </span> and{" "}
          <span className="underline">Privacy Policy</span>
        </span>
        <button
          className="w-full bg-[#D2122E] p-[15px] rounded-[10px] text-[25px] font-bold mt-[40px] hover:bg-[#B31B1B]"
          onClick={submitClicked}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
