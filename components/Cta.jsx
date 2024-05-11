import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
            <h2 className="h2 max-w-xl text-center mb-8">"Equipped to transform your concepts into tangible realities, I am here to provide trustworthy assistance."</h2>
            <Link href='/contact'>
            <Button>Contact me</Button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
