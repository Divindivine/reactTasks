import { EachUserDataType, ShowUsersPropType } from "../type/type";
import { userImages } from "../images/userImage";
import deleteIcon from "../images/delete.png";
import editIcon from "../images/edit.webp";
import { useDeleteUser } from "../api/useDeleteUser";
import { useState } from "react";
import EditUserForm from "./EditUserForm";
import { useNavigate } from "react-router-dom";

function ShowUsers({ data }: ShowUsersPropType) {
  const deleteUserMutation = useDeleteUser();
  const [showUserEditForm, setShowUserEditForm] = useState(false);
  const [currentEditingUser, setCurrentEditingUser] = useState(
    {} as EachUserDataType
  );
  const afterEditClicked = (user: EachUserDataType) => {
    setCurrentEditingUser(user);
    setShowUserEditForm(true);
  };
  const navigate = useNavigate();
  const profileClicked = (user: EachUserDataType, index: number) => {
    navigate("/");
    user.imageID = index;
    localStorage.setItem("currentUser", JSON.stringify(user));
  };
  return (
    <>
      <div
        className="w-1/4 h-1/2 flex flex-col overflow-auto gap-[10px] bg-white rounded-t-[20px] px-[10px] border-t-[20px] border-white"
        style={{ scrollbarWidth: "none" }}
      >
        {data.map((userDetail: EachUserDataType, index) => (
          <div
            key={userDetail.id}
            className="flex items-center p-[10px] border-b-[1px] border-black justify-between"
          >
            <div
              className="flex gap-[10px] items-center bg-slate-200 rounded-[10px] p-[10px] cursor-pointer"
              onClick={() => profileClicked(userDetail, index)}
            >
              <div
                className="w-[60px] h-[60px] rounded-full"
                style={{
                  backgroundImage: `url(${userImages[index]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <span className="text-[25px] font-bold">{userDetail.name}</span>
            </div>
            <div className="flex justify-between w-1/6 items-center">
              <img
                className="h-[30px] w-[30px] cursor-pointer hover:h-[50px] hover:w-[50px]"
                src={deleteIcon}
                alt=""
                onClick={() => deleteUserMutation.mutate(userDetail.id)}
              />
              <img
                className="h-[30px] w-[30px] cursor-pointer hover:h-[50px] hover:w-[50px]"
                src={editIcon}
                alt=""
                onClick={() => afterEditClicked(userDetail)}
              />
            </div>
          </div>
        ))}
      </div>
      {showUserEditForm && (
        <EditUserForm
          currentEditingUser={currentEditingUser}
          setShowUserEditForm={setShowUserEditForm}
        />
      )}
    </>
  );
}

export default ShowUsers;
