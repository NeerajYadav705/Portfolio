import Link from "next/link";


const Logo = () => {
  
  return (
    <Link href="/">
      {/* <Image src="/hero/logo.png" width={64} height={64} priority alt="logo" /> */}

      <h1 className="dark:text-primary text-3xl">Neeraj</h1>
    </Link>
  );
};

export default Logo;
