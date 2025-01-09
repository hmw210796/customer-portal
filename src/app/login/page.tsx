import LoginCard from "@/components/Specific/LoginCard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await getServerSession();

  if (session) redirect("/users");

  return <LoginCard />;
};

export default LoginPage;
