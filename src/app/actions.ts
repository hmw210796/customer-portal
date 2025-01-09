"use server";

import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";

export const getSessionData = async () => {
  const session = await getServerSession(authOptions);

  return session;
};

// API

export const fetchUsers = async () => {
  let currentPage = 1;
  const fetchedUserList = [];

  while (true) {
    const response = await fetch(
      `https://reqres.in/api/users?page=${currentPage}`
    );

    const data = await response.json();

    fetchedUserList.push(...data.data);

    if (currentPage >= data.total_pages) break;

    currentPage++;
  }

  const filteredUserList = fetchedUserList.filter(
    (user) => user.first_name.startsWith("G") || user.last_name.startsWith("W")
  );

  return filteredUserList;
};
