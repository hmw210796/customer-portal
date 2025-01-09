"use server";

import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { UserType } from "@/types/User.d";

export const getSessionData = async () => {
  const session = await getServerSession(authOptions);

  return session;
};

// API

export const fetchUsers = async () => {
  const fetchAllUsers = async (currentPage = 1, fetchedUserList = []) => {
    const response = await fetch(
      `https://reqres.in/api/users?page=${currentPage}`
    );

    const data = await response.json();
    const collectedUserList = fetchedUserList.concat(data.data);

    if (currentPage > data.total_pages) {
      return collectedUserList;
    }

    return fetchAllUsers(currentPage + 1, collectedUserList);
  };

  const fetchedUserList = await fetchAllUsers();

  const filteredUserList = fetchedUserList.filter(
    (user: UserType) =>
      user?.first_name?.startsWith("G") || user?.last_name?.startsWith("W")
  );

  return filteredUserList;
};
