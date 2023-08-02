"use client";
import { useAppSelector } from "../redux/hooks";
import Header from "@/app/components/Header";
import UsersContainer from "../components/UsersContainer";
import PhotoModal from "../components/PhotoModal";
import InfoModal from "../components/InfoModal";
import RenameModal from "../components/RenameModal";

const Friends: React.FC = () => {
  const friends = useAppSelector((state) => state.user.myFriends);
  const openModalPhoto = useAppSelector((state) => state.user.openModalPhoto);
  const openModalInfo = useAppSelector((state) => state.user.openModalInfo);
  const openModalRename = useAppSelector((state) => state.user.openModalRename);

  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center">
      <Header />
      {openModalPhoto && <PhotoModal />}
      {openModalInfo && <InfoModal />}
      {openModalRename && <RenameModal />}
      {!friends.length && (
        <div className="flex flex-col items-center text-fourth mt-32 sm:mt-40 gap-5 p-5 text-center sm:flex sm:flex-row sm:gap-3">
          <h3 className="text-3xl select-none">You have no friends added</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-mood-sad"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M9 10l.01 0"></path>
            <path d="M15 10l.01 0"></path>
            <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0"></path>
          </svg>
        </div>
      )}
      <UsersContainer users={friends} />
    </div>
  );
};

export default Friends;
