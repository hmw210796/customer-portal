"use server";

import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { UserType } from "@/types/User.d";
import { maskEmail } from "@/utils";

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

    if (!response.ok) {
      console.log("first");
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const collectedUserList = fetchedUserList.concat(data.data);

    if (currentPage > data.total_pages) {
      return collectedUserList;
    }

    return fetchAllUsers(currentPage + 1, collectedUserList);
  };

  try {
    const fetchedUserList = await fetchAllUsers();

    const filteredUserList = fetchedUserList
      .filter(
        (user: UserType) =>
          user?.first_name?.startsWith("G") || user?.last_name?.startsWith("W")
      )
      .map((user: UserType) => ({ ...user, email: maskEmail(user.email) }));

    return filteredUserList;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const fetchUserEmail = async (id: number) => {
  const response = await fetch(`https://reqres.in/api/users/${id}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  return data.data.email;
};
