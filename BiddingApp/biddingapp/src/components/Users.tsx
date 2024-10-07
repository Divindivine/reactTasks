import { useContext, useEffect } from "react";
import { users } from "../data/users";
import { userPropType } from "../type/type";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
// import { userPropType } from "./type/type";

function Users() {
  const { currentUser, setcurrentUser }: userPropType = useContext(UserContext);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);
  console.log(currentUser.name);

  console.log(currentUser);
  return (
    <>
      {users.map((element, index) => (
        <>
          <Link to="products">
            <div
              key={index}
              className="flex p-[16px] flex-col items-center gap-[13px] rounded-[23px] bg-white"
              onClick={() => {
                setcurrentUser({ name: element.name, image: element.image });
              }}
            >
              <div
                className="w-[50px] h-[50px] rounded-full"
                style={{
                  backgroundImage: `url(${element.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <span className="text-[#000] text-center font-poppins text-[16px] font-medium leading-[24px]">
                {element.name}
              </span>
            </div>
          </Link>
        </>
      ))}
    </>
  );
}

export default Users;
