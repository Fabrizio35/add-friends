import { User } from "./userTypes";

export interface UserInitialState {
  users: User[];
  myFriends: User[];
  myFriendsIds: string[];
  photo: string;
  userSelectId: string;
  openModalPhoto: boolean;
  openModalInfo: boolean;
  openModalRename: boolean;
}

export interface UsersContainerProps {
  users: User[];
}

export interface UserProps {
  user: User;
}
