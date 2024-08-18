"use client";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import Image from "next/image";
import { useState } from "react";
import NavItems from "./NavItems";

const Navbar = () => {
  const [showImage, setShowImage] = useState(false);

  const handleLogoClick = () => {
    setShowImage(!showImage); // Toggle between the SVG and image
  };

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* mobile nav left */}

              {/* logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <div onClick={handleLogoClick}>
                    {!showImage ? (
                      <Icons.logo className="h-10 w-10" />
                    ) : (
                      <Image
                        src="/dragon.webp"
                        alt="Dragon Logo"
                        width={40}
                        height={40}
                      />
                    )}
                  </div>
                </Link>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
