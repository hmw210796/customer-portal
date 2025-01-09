import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="flex items-center justify-center flex-1 flex-col gap-4">
      <h1 className="text-4xl ">Welcome to the customer portal</h1>
      {session && (
        <p>
          You can view your <Link href={"/users"}>Users</Link> here
        </p>
      )}
    </div>
  );
}
