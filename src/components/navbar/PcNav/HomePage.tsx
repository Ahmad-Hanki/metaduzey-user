'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HomePage = () => {
  const pathname = usePathname()
  return (
    <Link
      href={"/"}
      className={cn("text-black/65 tab transition-all hover:tab-active", pathname === "/" ? "text-black tab-active" : "")}
      
    >
      Ana Sayfa
    </Link>
  );
};

export default HomePage;
