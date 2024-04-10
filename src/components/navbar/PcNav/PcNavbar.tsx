"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import HomePage from "./HomePage";
import Ekibimiz from "./Ekibimiz";
import Hizmetlerimiz from "./Hizmetlerimiz";
import EkHizmetlerimiz from "./Ek-hizmetlerimiz";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TherapyPlace } from "@/types/types";

interface PcNavbarProps {
  data : TherapyPlace[];
}

const PcNavbar = ({data}:PcNavbarProps) => {
  const pathname = usePathname();

  const Links = [
    {
      href: "/hizmetlerimiz/kurumsal-hizmetler",
      name: "Kurumsal",
      active: pathname === "/hizmetlerimiz/kurumsal-hizmetler",
    },
    {
      href: "/egitim-ve-supervizyon",
      name: "Eğitim Ve Süpervizyon",
      active: pathname === "/egitim-ve-supervizyon",
    },
    {
      href: "/blog",
      name: "Blog",
      active: pathname === "/blog",
    },
    {
      href: "/iletisim",
      name: "iletisim",
      active: pathname === "/iletisim",
    },
  ];
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollY);

  return (
    <div role="tablist" className={cn("tabs tabs-bordered text-black/65 mx-auto z-20", scrollY>131 ? 'fixed top-0 p-6 z-20' : '')}>
      <HomePage />
      <Ekibimiz data= {data}/>
      <Hizmetlerimiz />
      <EkHizmetlerimiz />

      {Links.map((link) => {
        return (
          <li
            key={link.href}
            role="tab"
            className={cn(
              "tab transition-all hover:tab-active",
              link.active ? "tab-active" : ""
            )}
          >
            <Link
              className={cn(
                "text-black/75 hover:text-black/90",
                link.active ? "text-black" : ""
              )}
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default PcNavbar;
