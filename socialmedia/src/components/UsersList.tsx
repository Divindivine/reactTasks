import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { deleteUsers } from "../api/deleteUsers";
import options from "../img/options.png";
import { eachUserDataType, userListPropType } from "../type/type";

function UsersList({ user }: userListPropType) {
  const queryClient = useQueryClient();
  const [showOption, setShowOption] = useState(false);
  const handleOptions = (user: eachUserDataType) => {
    setShowOption((prev) => !prev);
  };

  const deleteUserMutation = useMutation({
    mutationFn: deleteUsers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.log("error on deleting user", error);
    },
  });

  const handleEditUser = (user: eachUserDataType) => {};

  const handleDeleteUser = (id: number) => {
    deleteUserMutation.mutate(id);
  };

  return (
    <div className="flex gap-[20px] justify-start items-center p-[10px] w-[367px] border-b-[2px] py-[20px]">
      <div className="w-[28px] h-[28px] bg-black rounded-full"></div>
      <div className="flex flex-col">
        <span className="text-[14px] font-poppins">{user.name}</span>
        <span className="text-[12px] text-[#a3a3a3] font-poppins">
          {user.email}
        </span>
      </div>
      <img
        className="w-[15px] h-[25px] ml-auto cursor-pointer"
        src={options}
        onClick={() => handleOptions(user)}
        alt=""
      />
      {showOption && (
        <div className="flex flex-col gap-[2px] ml-auto">
          <button
            className="bg-slate-300 rounded-[5px] px-[5px] "
            onClick={() => handleEditUser(user)}
          >
            Edit
          </button>
          <button
            className="bg-slate-300 rounded-[5px] px-[5px]"
            onClick={() => handleDeleteUser(user.id)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default UsersList;
