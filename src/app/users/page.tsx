import { Metadata } from "next";
import { fetchUsers } from "../actions";
import UserClient from "./users-client";

export const metadata: Metadata = {
  title: "Users",
};

const UserListPage = async () => {
  const users = await fetchUsers();

  return (
    <div className="p-4">
      <h1 className="text-center text-4xl">List of users</h1>

      <UserClient user={users} />
    </div>
  );
};

export default UserListPage;
