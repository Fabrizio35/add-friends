"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getUsers } from "./redux/userSlice";
import Header from "@/app/components/Header";
import UsersContainer from "./components/UsersContainer";
import PhotoModal from "@/app/components/PhotoModal";
import InfoModal from "./components/InfoModal";

export default function Home() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.users);
  const openModalPhoto = useAppSelector((state) => state.user.openModalPhoto);
  const openModalInfo = useAppSelector((state) => state.user.openModalInfo);

  useEffect(() => {
    if (!users.length) {
      fetch("https://randomuser.me/api/?results=33")
        .then((res) => res.json())
        .then((data) => dispatch(getUsers(data.results)));
    }
  }, []);

  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center">
      {users.length ? <Header /> : null}
      {!users.length && (
        <div className="mt-40 flex items-center gap-3">
          <span className="text-third text-3xl">Loading</span>
          <div className="w-5 h-5 border-third border-4 border-dashed p-5 rounded-full animate-spin"></div>
        </div>
      )}
      <UsersContainer users={users} />
      {openModalPhoto && <PhotoModal />}
      {openModalInfo && <InfoModal />}
    </div>
  );
}
