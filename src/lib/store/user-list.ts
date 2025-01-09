import { UserType } from "@/types/User.d";
import { createSlice } from "@reduxjs/toolkit";

type ListResponse = {
  list: UserType[];
};

const userListInitialState: Partial<ListResponse> = {
  list: [],
};

export const userListSlice = createSlice({
  name: "user-list",
  initialState: userListInitialState,
  reducers: {
    setUserList(state, action) {
      state.list = action.payload.list;
    },
    resetList(state) {
      state.list = [];
    },
  },
});

export const { setUserList, resetList } = userListSlice.actions;
