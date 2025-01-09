"use client";

import { getSessionData } from "@/app/actions";
import { useAppDispatch } from "@/hooks";
import { setSession } from "@/lib/store/session";
import { useEffect } from "react";

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initSession = async () => {
      const session = await getSessionData();

      dispatch(setSession(session));
    };

    initSession();
  }, [dispatch]);

  return <>{children}</>;
};

export default SessionProvider;
