import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteUsers } from "../api/deleteUsers";
import options from "../img/options.png";
import { userListPropType } from "../type/type";
import EditUserForm from "./EditUserForm";

function UsersList({ user, users }: userListPropType) {
  const queryClient = useQueryClient();
  const [showOption, setShowOption] = useState(false);
  const handleOptions = () => {
    setShowOption((prev) => !prev);
  };
  const [showEditField, setShowEditField] = useState(false);
  const deleteUserMutation = useMutation({
    mutationFn: deleteUsers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.log("error on deleting user", error);
    },
  });

  const handleDeleteUser = (id: number) => {
    deleteUserMutation.mutate(id);
  };

  const navigate = useNavigate();

  return (
    <div className="flex justify-start items-center p-[10px] w-[367px] border-b-[3px] py-[20px]">
      <div
        className="flex gap-[20px]"
        onClick={() => navigate("/home", { state: { user, users } })}
      >
        <div className="w-[28px] h-[28px] bg-black rounded-full"></div>
        <div className="flex flex-col">
          <span className="text-[14px] font-poppins">{user.name}</span>
          <span className="text-[12px] text-[#a3a3a3] font-poppins">
            {user.email}
          </span>
        </div>
      </div>

      <img
        className="w-[15px] h-[25px] ml-auto cursor-pointer"
        src={options}
        onClick={handleOptions}
        alt=""
      />
      {showOption && (
        <div className="flex flex-col gap-[2px] ml-auto">
          <button
            className="bg-slate-300 rounded-[5px] px-[5px] "
            onClick={() => setShowEditField(true)}
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
      {showEditField && (
        <EditUserForm user={user} setShowEditField={setShowEditField} />
      )}
    </div>
  );
}

export default UsersList;
