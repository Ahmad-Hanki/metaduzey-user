"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const EkHizmetlerimiz = () => {
  const pathname = usePathname();
  const servers = [
    {
      name: "Bütünce Ebeveyn Danışmanlığı Çocuk Gelişim Takip Programı",
      href: "/hizmetlerimiz/butun-ce-ebeveyn-cocuk-baglanma-ve-gelisim-takip-programi",
      active:
        pathname ===
        "/hizmetlerimiz/butun-ce-ebeveyn-cocuk-baglanma-ve-gelisim-takip-programi",
    },
    {
      name: "Bütünce Ebeveyn Danışma Hattı",
      href: "/hizmetlerimiz/butunce-ebeveyn-danisma-hatti",
      active: pathname === "/hizmetlerimiz/butunce-ebeveyn-danisma-hatti",
    },
  ];
  return (
    <details>
      <summary>
        <p>Bütünce Ebeveyn Danışmanlığı</p>
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
