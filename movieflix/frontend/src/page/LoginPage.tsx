import { useState } from "react";
import backgroundImage from "../img/movebg.jpeg";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

function LoginPage() {
  const [wantSign, setWantSign] = useState(false);
  return (
    <>
      {wantSign ? (
        <SignupForm setWantSign={setWantSign} />
      ) : (
        <LoginForm setWantSign={setWantSign} />
      )}
      <div className="absolute top-0 -z-10 h-screen w-screen">
        <img className="w-full h-full" src={backgroundImage} alt="" />
      </div>
    </>
  );
}

export default LoginPage;
