"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Hizmetlerimiz = () => {
  const pathname = usePathname();

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
  ];
  return (
    <details>
      <summary>
        <p>Terapi & Danışmanlık</p>
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

export default Hizmetlerimiz;
