import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { eachCurrentUserPropType } from "../type/type";

function Users({ user }: eachCurrentUserPropType) {
  const usercontext = useContext(UserContext);
  const createCurrentUser = (user: { name: string; image: string }) => {
    usercontext?.setcurrentUser({
      name: user.name,
      image: user.image,
    });
  };

  return (
    <>
      <Link to="products">
        <div
          className="flex p-[16px] flex-col items-center gap-[13px] rounded-[23px] bg-white"
          onClick={() => {
            createCurrentUser(user);
          }}
        >
          <div
            className="w-[50px] h-[50px] rounded-full"
            style={{
              backgroundImage: `url(${user.image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <span className="text-[#000] text-center font-poppins text-[16px] font-medium leading-[24px]">
            {user.name}
          </span>
        </div>
      </Link>
    </>
  );
}

export default Users;
