import { users } from "../data/users";
import { currentUserPropType } from "../type/type";

function Profiles() {
  const handleProfileView = (user: currentUserPropType) => {
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        name: user.name,
        image: user.image,
      })
    );
    window.location.reload();
  };

  return (
    <>
      <div className="absolute z-[10px] top-[130px] right-[20px] flex flex-col gap-[10px] w-[250px] cursor-pointer">
        <span className="font-poppins text-[20px]">Choose your account</span>
        {users.map((user) => (
          <div
          key={user.name}
            className="flex justify-start items-center border-b-[2px] border-l-[2px] p-[10px]"
            onClick={() => handleProfileView(user)}
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
            <div className="ml-[30px] font-poppins">{user.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Profiles;
