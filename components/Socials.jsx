"use client";

import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  // {
  //   path: '/',
  //   name:<RiYoutubeFill/>,
  // },
  {
    path: 'https://www.linkedin.com/in/neeraj-yadav-017a571b4/',
    name:<RiLinkedinFill/>,
  },
  {
    path: 'https://github.com/NeerajYadav705',
    name:<RiGithubFill/>,
  },
  {
    path: 'https://www.facebook.com/neeraj9557',
    name:<RiFacebookFill/>,
  },
  {
    path: 'https://www.instagram.com/neeraj_yadav_705/',
    name:<RiInstagramFill/>,
  },
]

const Socials = ({containerStyles, iconsStyles}) => {
  return <div className={`${containerStyles}`}>
    {icons.map((icon,index) =>{
      return (
        <Link href={icon.path} key={index}>
        <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      )
    })}
  </div>
};

export default Socials;
