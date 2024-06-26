"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const EkHizmetlerimiz = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const servers = [
    {
      name: "Iletisim bilgiler",
      href: "/iletisim",
      active: pathname === "/iletisim",
    },
  ];

  const activeServerIndex = servers.findIndex(
    (server) => server.href === pathname
  );

  return (
    <details
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      open={open}
      role="tab"
      className={cn(
        "tab transition-all hover:tab-active",
        activeServerIndex !== -1 ? "tab-active" : ""
      )}
    >
      <summary>
        <a
          className={cn(
            "z-20 text-black/65 transition-all",
            activeServerIndex !== -1 ? "text-black" : ""
          )}
        >
          Iletisim
        </a>
      </summary>
      <div className="bg-inherit p-3">
        <ul className=" bg-white z-10 w-40 space-y-3">
          {servers.map((link) => {
            return (
              <li key={link.href} className="max-w-60 mx-auto">
                <Link
                  className={cn(
                    "text-black/65 hover:text-black/90",
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
      </div>
    </details>
  );
};

export default EkHizmetlerimiz;
