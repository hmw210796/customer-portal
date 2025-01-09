"use client";

import Button, { ButtonStyles } from "@/components/General/Button";
import { signOut } from "next-auth/react";
import { useAppSelector } from "@/hooks";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SiteHeader = () => {
  const { isAuthenticated, user } = useAppSelector((state) => state.session);
  const router = useRouter();

  const handleLogOut = () => {
    signOut({ callbackUrl: "/login" });
  };

  return (
    <header>
      <div className="flex items-center justify-between p-4 border-b-2">
        <Link className="text-3xl font-bold" href={"/"}>
          Zurich
        </Link>

        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            Welcome, {user?.name}
            <Button onClick={handleLogOut} className={ButtonStyles.Danger}>
              Log out
            </Button>
          </div>
        ) : (
          <Button onClick={() => router.push("/login")}>Log in</Button>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;
