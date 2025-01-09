"use client";

import UserCard from "@/components/Specific/UserCard";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setUserList } from "@/lib/store/user-list";
import { UserType } from "@/types/User.d";
import { useEffect } from "react";

type UserClientProps = {
  user: UserType[];
};

const UserClient: React.FC<UserClientProps> = ({ user }) => {
  const dispatch = useAppDispatch();
  const userList = useAppSelector((state) => state.userList.list);

  useEffect(() => {
    dispatch(setUserList({ list: user }));
  }, [dispatch, user]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {userList?.map((user, index) => (
        <UserCard user={user} key={index} />
      ))}
    </div>
  );
};

export default UserClient;
