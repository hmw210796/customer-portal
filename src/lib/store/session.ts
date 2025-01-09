import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Session } from "next-auth";

type sessionUserType = {
  name?: string | null;
  image?: string | null;
  email?: string | null;
};

interface SessionState {
  user: sessionUserType | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const sessionInitialState: SessionState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState: sessionInitialState,
  reducers: {
    setSession: (state, action: PayloadAction<Session | null>) => {
      state.user = action.payload?.user || null;
      state.isAuthenticated = !!action.payload;
      state.isLoading = false;
    },
    clearSession: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
});

export const { setSession, clearSession } = sessionSlice.actions;
