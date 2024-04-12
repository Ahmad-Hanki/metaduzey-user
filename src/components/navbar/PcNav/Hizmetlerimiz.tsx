"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Hizmetlerimiz = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const servers = [
    {
      name: "Psikolojik Danışmanlık",
      href: "/hizmetlerimiz/psikolojik-danismanlik",
      active: pathname === "/hizmetlerimiz/psikolojik-danismanlik",
    },
    {
      name: "Online Terapi",
      href: "/hizmetlerimiz/online-terapi",
      active: pathname === "/hizmetlerimiz/online-terapi",
    },
    {
      name: "Çift & Evlilik Terapisi",
      href: "/hizmetlerimiz/cift-terapisi-evlilik-terapisi",
      active: pathname === "/hizmetlerimiz/cift-terapisi-evlilik-terapisi",
    },
    {
      name: "Aile Terapisi",
      href: "/hizmetlerimiz/aile-terapisi",
      active: pathname === "/hizmetlerimiz/aile-terapisi",
    },
    {
      name: "Çocuk & Ergen Terapisi",
      href: "/hizmetlerimiz/cocuk-ergen-terapisi-danismanligi",
      active: pathname === "/hizmetlerimiz/cocuk-ergen-terapisi-danismanligi",
    },
    {
      name: "Neden Bütün Psikoloji?",
      href: "/neden-butun-psikoloji",
      active: pathname === "/neden-butun-psikoloji",
    },
    {
      name: "Psikolojik Danışmanlık",
      href: "/online-psikolog",
      active: pathname === "/online-psikolog",
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
        activeServerIndex !== -1 ? "tab-active" : "tab"
      )}
    >
      <summary>
        <a
          className={cn(
            "z-10 text-black/65 transition-all",
            activeServerIndex !== -1 ? "text-black" : ""
          )}
        >
          Terapi & Danışmanlık
        </a>
      </summary>
      <div className="bg-inherit pt-3">
        <ul className="bg-white z-50 w-52 space-y-3">
          {servers.map((link) => {
            return (
              <li key={link.href}>
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

export default Hizmetlerimiz;
