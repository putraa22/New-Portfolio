import React from "react";

// next link
import Link from "next/link";

// icons
import { RiInstagramLine, RiFacebookLine, RiGithubLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
