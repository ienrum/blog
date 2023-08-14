import Link from "next/link";

const Navigation = (): React.ReactNode => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/edit">Edit</Link>
    </>
  );
};

export default Navigation;
