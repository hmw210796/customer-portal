"use client";
import { Provider } from "react-redux";
import { AppStore, makeStore } from "@/lib/store";
import SessionProvider from "./SessionProvider";
import { useRef } from "react";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <SessionProvider>{children}</SessionProvider>
    </Provider>
  );
};

export default StoreProvider;
