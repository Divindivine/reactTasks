import { useState } from "react";
import { useLocation } from "react-router-dom";
import { eachUserDataType } from "../type/type";
import leftarrow from "../img/leftArrow.png";

function HomePage() {
  const { state } = useLocation();
  const currentUser: eachUserDataType = state;
  const [showCurrentUserDetails, setShowCurrentUserDetails] = useState(false);

  return (
    <>
      <div
        className="absolute top-0 left-0 cursor-pointer"
        onClick={() => setShowCurrentUserDetails(true)}
      >
        <div
          className="w-[100px] h-[100px] rounded-[10px] flex flex-col justify-center items-center gap-[10px]"
          style={{ background: "rgba(0, 0, 0, 0.05)" }}
        >
          <div className="w-[40px] h-[40px] bg-black rounded-full"></div>
          <div className="w-[100px] truncate">
            <span className="font-poppins text-[20px]">{currentUser.name}</span>
          </div>
        </div>
      </div>
      {showCurrentUserDetails && (
        <div className="absolute top-0 left-0">
          <div className="bg-slate-100 flex flex-col p-[10px] rounded-[10px]">
            <div
              className="flex gap-[15px] bg-slate-300 w-[100px] h-[30px] justify-center items-center rounded-[5px] cursor-pointer"
              onClick={() => setShowCurrentUserDetails(false)}
            >
              <img src={leftarrow} alt="" className="h-[20px] w-[20px]" />
              <span className="text-black">back</span>
            </div>
            <div className="h-[100px] w-[100px] bg-black self-center rounded-full"></div>
            <div className="mt-[20px]">
              <span className="font-poppins text-[18px] font-semibold">ID: {currentUser.id}</span>
            </div>
            <div className="mt-[20px]">
              <span className="font-poppins text-[18px] font-semibold">Name: {currentUser.name}</span>
            </div>
            <div className="mt-[20px]">
              <span className="font-poppins text-[18px] font-semibold">Email: {currentUser.email}</span>
            </div>
            <div className="mt-[20px]">
              <span className="font-poppins text-[18px] font-semibold">Gender: {currentUser.gender}</span>
            </div>
            <div className="mt-[20px]">
              <span className="font-poppins text-[18px] font-semibold">Status: {currentUser.status}</span>
            </div>
          </div>
        </div>
      )}
      <div className="w-screen h-screen bg-[#87CEFA] flex justify-center items-center">
        <div className="w-2/4 h-5/6 bg-white rounded-[15px] flex flex-col gap-[30px] p-[30px] overflow-y-auto">
          {/* {wanna iterate from here} */}
          <div className="w-full border-[2px] flex flex-col p-[10px] gap-[15px] rounded-[10px] items-center">
            <div className="w-full flex items-center gap-[150px]">
              <div className="flex items-center gap-[30px]">
                <div className="w-[50px] h-[50px] bg-black rounded-full"></div>
                <span className="text-[22px] font-bold font-poppins uppercase text-nowrap">
                  aaaaaaaa aaaa
                </span>
              </div>
              <span className="text-[18px] truncate font-poppins text-[#b8b8b8] font-semibold">
                Tabgo timor tum comis viduata testimonium dolorem aliquam quo
              </span>
            </div>
            <div className="max-w-[700px]">
              <span className="font-poppins ">
                Adultus tamisium molestiae. Summopere eos spiculum. Capillus
                testimonium supra. Quia vespillo vociferor. Molestiae tardus
                ullus. Venio mollitia adiuvo. Vespillo ullus aranea. Conqueror
                iure cresco. Totus spiritus spes. Desino cotidie voro. Pauper
                deinde qui. Voluptates corporis capto. Contabesco vix demo. Alo
                vulpes et.
              </span>
            </div>
          </div>

          <div className="w-full border-[2px] flex flex-col p-[10px] gap-[15px] rounded-[10px] items-center">
            <div className="w-full flex items-center gap-[150px]">
              <div className="flex items-center gap-[30px]">
                <div className="w-[50px] h-[50px] bg-black rounded-full"></div>
                <span className="text-[22px] font-bold font-poppins uppercase text-nowrap">
                  aaaaaaaa aaaa
                </span>
              </div>
              <span className="text-[18px] truncate font-poppins text-[#b8b8b8] font-semibold">
                Tabgo timor tum comis viduata testimonium dolorem aliquam quo
              </span>
            </div>
            <div className="max-w-[700px]">
              <span className="font-poppins ">
                Adultus tamisium molestiae. Summopere eos spiculum. Capillus
                testimonium supra. Quia vespillo vociferor. Molestiae tardus
                ullus. Venio mollitia adiuvo. Vespillo ullus aranea. Conqueror
                iure cresco. Totus spiritus spes. Desino cotidie voro. Pauper
                deinde qui. Voluptates corporis capto. Contabesco vix demo. Alo
                vulpes et.
              </span>
            </div>
          </div>

          <div className="w-full border-[2px] flex flex-col p-[10px] gap-[15px] rounded-[10px] items-center">
            <div className="w-full flex items-center gap-[150px]">
              <div className="flex items-center gap-[30px]">
                <div className="w-[50px] h-[50px] bg-black rounded-full"></div>
                <span className="text-[22px] font-bold font-poppins uppercase text-nowrap">
                  aaaaaaaa aaaa
                </span>
              </div>
              <span className="text-[18px] truncate font-poppins text-[#b8b8b8] font-semibold">
                Tabgo timor tum comis viduata testimonium dolorem aliquam quo
              </span>
            </div>
            <div className="max-w-[700px]">
              <span className="font-poppins ">
                Adultus tamisium molestiae. Summopere eos spiculum. Capillus
                testimonium supra. Quia vespillo vociferor. Molestiae tardus
                ullus. Venio mollitia adiuvo. Vespillo ullus aranea. Conqueror
                iure cresco. Totus spiritus spes. Desino cotidie voro. Pauper
                deinde qui. Voluptates corporis capto. Contabesco vix demo. Alo
                vulpes et.
              </span>
            </div>
          </div>

          <div className="w-full border-[2px] flex flex-col p-[10px] gap-[15px] rounded-[10px] items-center">
            <div className="w-full flex items-center gap-[150px]">
              <div className="flex items-center gap-[30px]">
                <div className="w-[50px] h-[50px] bg-black rounded-full"></div>
                <span className="text-[22px] font-bold font-poppins uppercase text-nowrap">
                  aaaaaaaa aaaa
                </span>
              </div>
              <span className="text-[18px] truncate font-poppins text-[#b8b8b8] font-semibold">
                Tabgo timor tum comis viduata testimonium dolorem aliquam quo
              </span>
            </div>
            <div className="max-w-[700px]">
              <span className="font-poppins ">
                Adultus tamisium molestiae. Summopere eos spiculum. Capillus
                testimonium supra. Quia vespillo vociferor. Molestiae tardus
                ullus. Venio mollitia adiuvo. Vespillo ullus aranea. Conqueror
                iure cresco. Totus spiritus spes. Desino cotidie voro. Pauper
                deinde qui. Voluptates corporis capto. Contabesco vix demo. Alo
                vulpes et.
              </span>
            </div>
          </div>

          <div className="w-full border-[2px] flex flex-col p-[10px] gap-[15px] rounded-[10px] items-center">
            <div className="w-full flex items-center gap-[150px]">
              <div className="flex items-center gap-[30px]">
                <div className="w-[50px] h-[50px] bg-black rounded-full"></div>
                <span className="text-[22px] font-bold font-poppins uppercase text-nowrap">
                  aaaaaaaa aaaa
                </span>
              </div>
              <span className="text-[18px] truncate font-poppins text-[#b8b8b8] font-semibold">
                Tabgo timor tum comis viduata testimonium dolorem aliquam quo
              </span>
            </div>
            <div className="max-w-[700px]">
              <span className="font-poppins ">
                Adultus tamisium molestiae. Summopere eos spiculum. Capillus
                testimonium supra. Quia vespillo vociferor. Molestiae tardus
                ullus. Venio mollitia adiuvo. Vespillo ullus aranea. Conqueror
                iure cresco. Totus spiritus spes. Desino cotidie voro. Pauper
                deinde qui. Voluptates corporis capto. Contabesco vix demo. Alo
                vulpes et.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
