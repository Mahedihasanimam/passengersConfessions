// features/token/tokenSlice.js

import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  balance: number;
  consultationHistory: Array<any>;
  consultationUpcoming: Array<any>;
  createdAt: string;
  doctorApplicationStatus: string;
  email: string;
  emailVerified: false;
  emailVerifyCode: string;
  isActive: boolean;
  isDoctor: boolean;
  isLocked: boolean;
  name: string;
  nhsNumber: string;
  notifications: Array<any>;
  password: string;
  role: string;
  services: Array<any>;
  updatedAt: string;
  __v: 0;
  _id: string;
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {} as IUser,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },

    clearUser(state) {
      state.user = {} as IUser;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
