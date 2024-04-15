"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const EkHizmetlerimiz = () => {
  const pathname = usePathname();
  const servers = [
    {
      name: "Iletisim bilgiler",
      href: "/iletisim",
      active: pathname === "/iletisim",
    },
    {
      name: "Insan Kaynaklari",
      href: "/insankaynaklari",
      active: pathname === "/insankaynaklari",
    },
  ];
  return (
    <details>
      <summary>
        <p>Iletisim</p>
      </summary>
      <ul>
        {servers.map((link) => {
          return (
            <li key={link.href}>
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
      </ul>
    </details>
  );
};

export default EkHizmetlerimiz;
