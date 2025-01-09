import { fetchUserEmail } from "@/app/actions";
import { UserType } from "@/types/User.d";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

type UserCardProps = {
  user: UserType;
};

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [email, setEmail] = useState({
    value: user.email,
    masked: true,
  });

  const toggleMask = async () => {
    if (email.masked) {
      const unmaskedEmail = await fetchUserEmail(user.id);

      setEmail({
        value: unmaskedEmail,
        masked: !email.masked,
      });
    } else {
      setEmail({
        value: user.email,
        masked: !email.masked,
      });
    }
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
          <i>{email.value}</i>

          <button onClick={toggleMask}>
            {email.masked ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
