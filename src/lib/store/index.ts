import { configureStore } from "@reduxjs/toolkit";
import { userListSlice } from "./user-list";
import { sessionSlice } from "./session";

export const makeStore = () => {
  return configureStore({
    reducer: {
      userList: userListSlice.reducer,
      session: sessionSlice.reducer,
    },
  });
};


export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
