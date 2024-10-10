import { useContext, useEffect } from "react";
import { users } from "../data/users";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { currentUserPropType, eachCurrentUserPropType, productItemsPropType } from "../type/type";

function Users({element}:eachCurrentUserPropType) {
  const usercontext = useContext(UserContext);
  
  const createCurrentUser = (element:{name:string,image:string}) =>{
    usercontext?.setcurrentUser({
      name:element.name,
      image: element.image
    });
  }

  return (
  
        <>
          <Link to = "products">
            <div
              className="flex p-[16px] flex-col items-center gap-[13px] rounded-[23px] bg-white"
              onClick={() => {createCurrentUser(element)}}
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
  );
}

export default Users;
