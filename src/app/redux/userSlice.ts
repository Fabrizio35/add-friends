import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/userTypes";
import { UserInitialState } from "@/types/types";

const initialState: UserInitialState = {
  users: [],
  myFriends: [],
  myFriendsIds: [],
  photo: "",
  userSelectId: "",
  openModalPhoto: false,
  openModalInfo: false,
  openModalRename: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    addFriend: (state, action: PayloadAction<User>) => {
      state.myFriends = [action.payload, ...state.myFriends];
      state.myFriendsIds = [action.payload.login.uuid, ...state.myFriendsIds];
    },
    deleteFriend: (state, action: PayloadAction<string>) => {
      const user = state.users.find(
        (user) => user.login.uuid === action.payload
      );
      if (user) {
        user.name.newName = "";
      }
      state.myFriends = state.myFriends.filter(
        (friend) => friend.login.uuid !== action.payload
      );
      state.myFriendsIds = state.myFriendsIds.filter(
        (id) => id !== action.payload
      );
    },
    setPhoto: (state, action: PayloadAction<string>) => {
      state.photo = action.payload;
    },
    setUserSelectId: (state, action: PayloadAction<string>) => {
      state.userSelectId = action.payload;
    },
    changeUserName: (state, action: PayloadAction<string>) => {
      if (state.userSelectId) {
        const friend = state.myFriends.find(
          (friend) => friend.login.uuid === state.userSelectId
        );
        const user = state.users.find(
          (user) => user.login.uuid === state.userSelectId
        );
        if (friend && user) {
          friend.name.newName = action.payload;
          user.name.newName = action.payload;
        }
        state.userSelectId = "";
      }
    },
    setOpenModalPhoto: (state, action: PayloadAction<boolean>) => {
      state.openModalPhoto = action.payload;
    },
    setOpenModalInfo: (state, action: PayloadAction<boolean>) => {
      state.openModalInfo = action.payload;
    },
    setOpenModalRename: (state, action: PayloadAction<boolean>) => {
      state.openModalRename = action.payload;
    },
  },
});

export const {
  getUsers,
  addFriend,
  deleteFriend,
  setPhoto,
  setUserSelectId,
  changeUserName,
  setOpenModalPhoto,
  setOpenModalInfo,
  setOpenModalRename,
} = userSlice.actions;

export default userSlice.reducer;
