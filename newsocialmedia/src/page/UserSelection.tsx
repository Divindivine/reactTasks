import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUsers } from "../api/getUsers";
import { eachUserDataType } from "../type/type";

function UserSelection() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <span className="text-[40px]">Loading Users....</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <span className="text-[40px]">Error on Fetching Users</span>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
       {
        data.map((element:eachUserDataType) => (
            <span className="text-[40px]">{element.name}</span>
        ))
       }  
    </div>
  );
}

export default UserSelection;
