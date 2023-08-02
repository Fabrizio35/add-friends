import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { changeUserName, setOpenModalRename } from "../redux/userSlice";

const RenameModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>("");

  const closeModalHandler = () => {
    dispatch(setOpenModalRename(false));
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(changeUserName(inputValue));
    dispatch(setOpenModalRename(false));
  };

  return (
    <div className="w-screen h-screen bg-blackTransparent fixed flex items-center justify-center z-20">
      <div className="bg-white relative rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-x absolute top-2 right-2 bg-first text-white cursor-pointer"
          width="20"
          height="20"
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
        <form
          onSubmit={submitHandler}
          className="p-10 pb-5 flex flex-col items-center gap-5"
        >
          <input
            type="text"
            placeholder="Rename your friend..."
            value={inputValue}
            onChange={changeHandler}
            className="border-2 border-third w-72 h-10 p-3 text-first rounded-md"
          />
          <button className="bg-third text-white p-1.5 text-xl rounded-xl">
            Rename
          </button>
        </form>
      </div>
    </div>
  );
};

export default RenameModal;
