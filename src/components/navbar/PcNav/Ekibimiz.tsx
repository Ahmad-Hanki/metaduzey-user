"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Ekibimiz = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // we will take it from db

  return (
    <details
      open={open}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      role="tab"
      className={cn("tab", pathname == "/ekibimiz" ? "tab-active" : "tab")}
    >
      <summary>
        <Link
          className={cn(
            "z-10 text-black/65 transition-all hover:tab-active",
            pathname == "/ekibimiz" ? "text-black" : ""
          )}
          href={"/ekibimiz"}
        >
          Ekibimiz
        </Link>
      </summary>
      <ul
        className="w-full pt-3"
      >
        <li>
          <a>Submenu 1</a>
        </li>
        <li>
          <a>Submenu 2</a>
        </li>
      </ul>
    </details>
  );
};

export default Ekibimiz;
