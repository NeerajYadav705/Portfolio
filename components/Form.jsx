"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const Form = () => {
  return <form action="https://formspree.io/f/mrgnjrak" method="POST" className="flex flex-col gap-y-4">
    {/* input */}
    <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-6" size={20}/>
    </div>
    {/* input */}
    <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="E-mail" />
        <MailIcon className="absolute right-6" size={20}/>
    </div>
    {/* input */}
    <div className="relative flex items-center">
        <Textarea id="message" name="message" placeholder="Type Your Message Here.." />
        <MessageSquare className="absolute top-4 right-6" size={20}/>
    </div>
    <Button  type="submit" className="flext gap-x-1 items-center max-w-[166px]">Let's Talk
    <ArrowRightIcon size={20}/>
    </Button>
  </form>
};

export default Form;
