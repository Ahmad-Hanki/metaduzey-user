"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../../ui/separator";

const Links = () => {
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
      href: "/blog/",
      name: "Blog",
      active: pathname === "/blog/",
    },
    {
      href: "/iletisim",
      name: "iletisim",
      active: pathname === "/iletisim",
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
