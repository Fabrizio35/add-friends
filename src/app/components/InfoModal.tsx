import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { usePathname } from "next/navigation";
import {
  setUserSelectId,
  setPhoto,
  setOpenModalInfo,
  setOpenModalPhoto,
} from "../redux/userSlice";

const InfoModal: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const path = usePathname();
  const users = useAppSelector((state) => state.user.users);
  const friends = useAppSelector((state) => state.user.myFriends);
  const userId = useAppSelector((state) => state.user.userSelectId);
  const user =
    path === "/friend"
      ? friends.find((friend) => friend.login.uuid === userId)
      : users.find((user) => user.login.uuid === userId);
  const [openModal, setOpenModal] = useState(true);

  const closeModalHandler = () => {
    dispatch(setUserSelectId(""));
    setOpenModal(false);
    setTimeout(() => {
      dispatch(setOpenModalInfo(false));
    }, 100);
  };

  const getDateRegistered = (date: Date | undefined): string => {
    if (!date) return "";

    const newDate = new Date(date);
    const day = newDate.getDate().toString().padStart(2, "0");
    const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
    const year = newDate.getFullYear().toString();

    return `${day}/${month}/${year}`;
  };

  const setPhotoHandler = () => {
    user && dispatch(setPhoto(user.picture.large));
    dispatch(setOpenModalPhoto(true));
  };

  return (
    <div className="w-screen h-screen bg-blackTransparent fixed flex items-center justify-center z-20">
      <div
        className={`bg-white z-20 flex flex-col items-center justify-center relative rounded-md gap-10 p-5 sm:w-auto ${
          openModal ? "animate-fadeIn" : "animate-fadeOut"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-x absolute top-2 right-2 bg-first text-white cursor-pointer"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={closeModalHandler}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M18 6l-12 12"></path>
          <path d="M6 6l12 12"></path>
        </svg>
        <div className="flex items-center justify-center w-full gap-6">
          <img
            src={user?.picture.large}
            alt={`${user?.name.first} ${user?.name.last} photo`}
            onClick={setPhotoHandler}
            className="rounded-full w-32 h-32 sm:w-44 sm:h-44 border-third border-4 p-2 transition-transform transform-gpu hover:scale-105 cursor-pointer"
          />
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl text-first">
              {user?.name.first} {user?.name.last}
            </span>
            <span className="text-gray-700 text-sm">{user?.email}</span>
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <div className="flex items-center text-first gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-phone"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
            </svg>
            <span>Phone: {user?.phone}</span>
          </div>
          <div className="flex items-center text-first gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-device-mobile"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z"></path>
              <path d="M11 4h2"></path>
              <path d="M12 17v.01"></path>
            </svg>
            <span>Cell: {user?.cell}</span>
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center mb-14">
          <div className="text-first flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-map-pin"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7"></path>
              <path d="M9 4v13"></path>
              <path d="M15 7v5"></path>
              <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"></path>
              <path d="M19 18v.01"></path>
            </svg>
            <span className="text-center">
              Location: {user?.location.city} - {user?.location.state} -{" "}
              {user?.location.country} ({user?.nat})
            </span>
          </div>

          <div className="text-first flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-map-pins"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z"></path>
              <path d="M8 7l0 .01"></path>
              <path d="M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z"></path>
              <path d="M16 15l0 .01"></path>
            </svg>
            <span className="text-center">
              Street: {user?.location.street.name}{" "}
              {user?.location.street.number}
            </span>
          </div>
        </div>
        <span className="absolute bottom-1 right-2 text-gray-500">
          Joined on {getDateRegistered(user?.registered.date)}
        </span>
      </div>
    </div>
  );
};

export default InfoModal;
