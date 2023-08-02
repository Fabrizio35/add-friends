import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { setOpenModalPhoto } from "../redux/userSlice";
import "../globals.css";

const PhotoModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const photo = useAppSelector((state) => state.user.photo);
  const [openModal, setOpenModal] = useState(true);

  const closeModalHandler = () => {
    setOpenModal(false);
    setTimeout(() => {
      dispatch(setOpenModalPhoto(false));
    }, 100);
  };

  return (
    <div className="w-screen h-screen bg-blackTransparent fixed flex items-center justify-center z-30">
      <div
        className={`bg-white z-20 flex items-center justify-center relative rounded-md w-72 h-72 sm:w-96 sm:h-96 p-5 ${
          openModal ? "animate-fadeIn" : "animate-fadeOut"
        }`}
      >
        <img src={photo} alt="user-photo" className=" w-full rounded-full" />
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
      </div>
    </div>
  );
};

export default PhotoModal;
