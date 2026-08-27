import RegisterClient from "./RegisterClient";

export default function RegisterPage({
  searchParams,
}: {
  searchParams?: { intent?: string; metal?: string };
}) {
  return <RegisterClient intent={searchParams?.intent || "register"} metal={searchParams?.metal || ""} />;
}
