"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../../ui/separator";

const Links = () => {
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
  return (
    <div>
      {Links.map((link) => {
        return (
          <div key={link.href}>
            <li>
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
            <Separator />
          </div>
        );
      })}
    </div>
  );
};

export default Links;
