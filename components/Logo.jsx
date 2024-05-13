import Image from "next/image";
import Link from "next/link";


const Logo = () => {
  const logoName = "エン"
  
  return (
    <Link href="/">
      {/* <Image src="/hero/n.png" width={50} height={50} priority alt="logo" className="" /> */}

      <h1 className="dark:text-primary text-2xl font-extrabold">{logoName}</h1>
    </Link>
  );
};

export default Logo;
