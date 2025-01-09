import { UserType } from "@/types/User.d";
import { maskEmail } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

type UserCardProps = {
  user: UserType;
};

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [masked, setMasked] = useState(true);

  const toggleMask = () => {
    setMasked(!masked);
  };

  return (
    <div className="flex items-center border p-4 rounded my-4 flex-col">
      <Image
        src={user.avatar ?? "/avatar.png"}
        width={150}
        height={200}
        alt={`${user?.first_name}_avatar`}
      />
      <div className="flex flex-col items-center gap-2">
        <h2>
          {user?.first_name} {user?.last_name}
        </h2>
        <div className="flex items-center gap-2">
          <i>{masked ? maskEmail(user?.email) : user?.email}</i>

          <button onClick={toggleMask}>
            {masked ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
