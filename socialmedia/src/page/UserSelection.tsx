import { QueryClient, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getUsers } from "../api/getUsers";
import NewUserForm from "../components/NewUserForm";
import UsersList from "../components/UsersList";
import { eachUserDataType } from "../type/type";

function UserSelection() {
  const queryClient = new QueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const [showNewUserForm, setShowNewUserForm] = useState(false);

  if (isLoading) {
    return <div>Loading users...</div>;
  }
  if (isError) {
    return <div>Error loading users</div>;
  }
  return (
    <div className="w-screen bg-[#F0F8FF] h-screen pt-[100px]">
      <div className="flex flex-col gap-[8px] items-center">
        <span className="font-poppins text-[24px]">Choose an account</span>
        <span className="font-poppins text-[16px]">
          to continue to <span className="text-[#00308F]">SocialMedia</span>
        </span>
      </div>
      <div
        className="flex flex-col items-center mt-[50px] h-[300px] overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        {data.map((user: eachUserDataType) => (
          <UsersList key={user.id} user={user} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center mt-[25px]">
        <span
          className="text-[20px] font-[poppins] items-center flex cursor-pointer"
          onClick={() => setShowNewUserForm(true)}
        >
          <span className="text-[40px] mr-[20px]">+</span> Add Profile
        </span>
      </div>
      {showNewUserForm && (
        <NewUserForm setShowNewUserForm={setShowNewUserForm} />
      )}
    </div>
  );
}

export default UserSelection;




