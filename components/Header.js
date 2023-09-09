import React from "react";

// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 py-6">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              alt="logo-image"
              width={280}
              height={48}
              priority={true}
            />
          </Link>
          {/* Social Link */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
