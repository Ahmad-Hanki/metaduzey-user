"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import HomePage from "./HomePage";
import Ekibimiz from "./Ekibimiz";
import EkHizmetlerimiz from "./Ek-hizmetlerimiz";
import Link from "next/link";
import { useEffect, useState } from "react";

interface PcNavbarnameAndId {
  name: string;
  id: string;
}

interface PcNavbarProps {
  data: PcNavbarnameAndId[];
}

const PcNavbar = ({ data }: PcNavbarProps) => {
  const pathname = usePathname();

  const Links = [
    {
      href: "/avsgep",
      name: "AVSGEP",
      active: pathname === "/avsgep",
    },
    {
      href: "/bisan",
      name: "BISAN",
      active: pathname === "/bisan",
    },

    {
      href: "/pals",
      name: "PALS",
      active: pathname === "/pals",
    },
    {
      href: "/nlp",
      name: "NLP",
      active: pathname === "/nlp",
    },
    {
      href: "/ikban",
      name: "IKBAN",
      active: pathname === "/ikban",
    },
    {
      href: "/football",
      name: "FUTBOL MENTORING",
      active: pathname === "/football",
    },
    {
      href: "/coaching",
      name: "COACHING",
      active: pathname === "/coaching",
    },
    {
      href: "/edu",
      name: "EĞİTİMLER",
      active: pathname === "/edu",
    },
    {
      href: "/blog/",
      name: "Blog",
      active: pathname === "/blog/",
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

  return (
    <div
      role="tablist"
      className={cn(
        "tabs tabs-bordered text-black/65 mx-auto z-20",
        scrollY > 131 ? "fixed top-0 p-6 z-20 bg-white" : ""
      )}
    >
      <HomePage />
      <Ekibimiz data={data} />

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
      <EkHizmetlerimiz />
    </div>
  );
};

export default PcNavbar;
