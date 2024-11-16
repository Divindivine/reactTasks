import { HeaderPropType } from "../type/type";
import favIcon from "../img/fav.svg";
import { useGetFavorites } from "../api/database/movies/useGetFavorites";

function Header({
  currentUser,
  viewProfile,
  setViewProfile,
  setFavClicked,
  favorites,
}: HeaderPropType) {
  let firstChar = currentUser.user_name.substring(0, 1);
  const { data, isLoading, isError } = favorites;
  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>error on fetching favorites</span>;

  const count = data && data.length;

  return (
    <div className="w-full flex flex-col border-b-2">
      <div className="flex self-end gap-[100px] items-center">
        <div
          className="bg-white p-[10px] rounded-full cursor-pointer hover:bg-slate-400 relative"
          onClick={() => setFavClicked(true)}
        >
          <div className="absolute -top-5 right-0 text-white text-[20px] font-bold">
            {count}
          </div>
          <img className="w-[50px] h-[50px]" src={favIcon} alt="" />
        </div>

        {viewProfile ? (
          <div className="p-[20px] bg-slate-800 flex flex-col m-[30px] rounded-[10px] text-white">
            <span
              className=" font-sans cursor-pointer text-[20px] m-[10px] w-min rounded-full p-[5px] hover:bg-white"
              onClick={() => setViewProfile(false)}
            >
              ✖
            </span>
            <div className="flex flex-col">
              <span className="font-bold">
                name:{" "}
                <span className="font-mono"> {currentUser.user_name}</span>
              </span>
              <span className="font-bold">
                email: <span className="font-mono">{currentUser.email}</span>
              </span>
            </div>
          </div>
        ) : (
          <div
            className="p-[20px] bg-[#EE82EE] w-[70px] h-[70px] flex items-center justify-center rounded-full m-[30px] cursor-pointer"
            onClick={() => setViewProfile(true)}
          >
            <span className="text-white text-[50px]">{firstChar}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
