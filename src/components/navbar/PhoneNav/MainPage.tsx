"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainPage = () => {
  const pathname = usePathname();

  const main = { href: "/", name: "Ana Sayfa", active: pathname === "/" };

  return (
    <Link
      href={main.href}
      className={cn("text-black/75", main.active ? "text-black" : "")}
    >
      {main.name}
    </Link>
  );
};

export default MainPage;
