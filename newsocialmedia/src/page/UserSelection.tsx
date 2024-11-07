import ShowUsers from "../components/ShowUsers";
import { useGetUsers } from "../api/useGetUsers";
import { useState } from "react";
import NewUserForm from "../components/NewUserForm";

function UserSelection() {
  const { data, isLoading, isError } = useGetUsers();
  const [showNewUserForm, setShowNewUserForm] = useState(false);

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
    <div
      className="w-screen h-screen flex flex-col justify-center items-center bg-[#72A0C1] relative"    >
      <ShowUsers data={data} />
      <div className="w-1/4 flex justify-center bg-white rounded-b-[20px] p-[10px]">
        <button
          className="p-[10px] w-1/4 h-[50px] bg-slate-500 text-white text-[22px] font-bold rounded-[8px] hover:bg-slate-700"
          onClick={() => setShowNewUserForm(true)}
        >
          Add user{" "}
        </button>
      </div>
      {showNewUserForm && <NewUserForm setShowNewUserForm={setShowNewUserForm}/>}
    </div>
  );
}

export default UserSelection;
