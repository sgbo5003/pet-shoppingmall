import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LoginResponse } from "../api/dto/auth";

interface UserInfoState {
  userInfo: LoginResponse;
}

interface UserInfoActions {
  setUserInfo: (userinfo: LoginResponse) => void;
  deleteUserInfo: () => void;
}

const defaultState = { id: 0, email: "", name: "", adminYn: "" };

const useUserStore = create(
  persist<UserInfoState & UserInfoActions>(
    (set) => ({
      userInfo: defaultState,
      setUserInfo: (userInfo: LoginResponse) => {
        set({ userInfo });
      },
      deleteUserInfo: () => {
        set({ userInfo: defaultState });
      },
    }),
    { name: "userStorage" }
  )
);

export default useUserStore;
