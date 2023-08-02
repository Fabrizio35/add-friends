import { UserProps } from "@/types/types";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  addFriend,
  deleteFriend,
  setPhoto,
  setUserSelectId,
  changeUserName,
  setOpenModalPhoto,
  setOpenModalInfo,
  setOpenModalRename,
} from "../redux/userSlice";
import { usePathname } from "next/navigation";

const User: React.FC<UserProps> = ({ user }) => {
  const dispatch = useAppDispatch();
  const myFriendsIds = useAppSelector((state) => state.user.myFriendsIds);
  const isFriend = myFriendsIds.includes(user.login.uuid);
  const path = usePathname();

  const addFriendHandler = () => {
    dispatch(addFriend(user));
  };

  const deleteFriendHandler = () => {
    dispatch(deleteFriend(user.login.uuid));
  };

  const setPhotoHandler = () => {
    dispatch(setPhoto(user.picture.large));
    dispatch(setOpenModalPhoto(true));
  };

  const setUserIdHandler = () => {
    dispatch(setUserSelectId(user.login.uuid));
    dispatch(setOpenModalInfo(true));
  };

  const setChangeName = () => {
    dispatch(setUserSelectId(user.login.uuid));
    dispatch(setOpenModalRename(true));
  };

  const resetNameHandler = () => {
    dispatch(setUserSelectId(user.login.uuid));
    dispatch(changeUserName(""));
  };

  return (
    <div className="bg-fourth flex flex-col rounded-xl p-3 gap-4 relative">
      <img
        src={user.picture.large}
        alt={`${user.name.title} photo`}
        className="rounded-full border-4 border-third p-2 w-40 h-40 cursor-pointer transition-transform transform-gpu hover:scale-105"
        onClick={setPhotoHandler}
      />
      {isFriend ? (
        <div
          className="bg-red-600 text-white p-1.5 rounded-xl hover:bg-red-500 hover:text-first flex gap-0.5 cursor-pointer absolute top-2 right-2"
          onClick={deleteFriendHandler}
        >
          <span>Delete</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </div>
      ) : (
        <div
          className="bg-lime-600 text-white p-1.5 rounded-xl hover:bg-lime-500 hover:text-first flex gap-0.5 cursor-pointer absolute top-2 right-2"
          onClick={addFriendHandler}
        >
          <span>Add</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-plus"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 5l0 14"></path>
            <path d="M5 12l14 0"></path>
          </svg>
        </div>
      )}
      {isFriend && (
        <div className="bg-third text-white p-1.5 rounded-xl hover:bg-thirdLight hover:text-first flex gap-1 cursor-pointer absolute top-14 right-2">
          <span onClick={setUserIdHandler}>More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-dots"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          </svg>
        </div>
      )}
      <div className="flex flex-col w-full">
        <div className="flex text-first items-center gap-2">
          {user.name.newName ? (
            <h2 className="text-2xl font-medium">{user.name.newName}</h2>
          ) : (
            <h2 className="text-2xl font-medium">
              {user.name.first} {user.name.last}
            </h2>
          )}
          {path === "/friends" && (
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-edit cursor-pointer text-second hover:text-third"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={setChangeName}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                <path d="M16 5l3 3"></path>
              </svg>
              <span className="font-bold select-none">/</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-refresh cursor-pointer text-second hover:text-third"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={resetNameHandler}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
              </svg>
            </div>
          )}
        </div>
        <span className="text-lg text-gray-700 mt-1 break-all">
          {user.email}
        </span>
        <span className="text-gray-500 mt-5 break-all">
          {user.location.city} - {user.location.state} - {user.location.country}{" "}
          ({user.nat})
        </span>
      </div>
    </div>
  );
};

export default User;
