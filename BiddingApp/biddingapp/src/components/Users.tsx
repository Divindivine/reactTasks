import React from "react";
import { users } from "../data/users";

function Users() {
  return (
    <>
      {users.map((element) => (
        <>
          <div className="flex p-[16px] flex-col items-center gap-[13px] rounded-[23px] bg-white">
            <div
              className="w-[50px] h-[50px] rounded-full"
              style={{ backgroundImage: `url(${element.image})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize:"cover" }}
            ></div>
            <span className="text-[#000] text-center font-poppins text-[16px] font-medium leading-[24px]">
              {element.name}
            </span>
          </div>
        </>
      ))}
    </>
  );
}

export default Users;
