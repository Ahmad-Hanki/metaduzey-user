"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Ekibimiz = () => {
  const pathname = usePathname();
  
  

  return (
    <details >
      <summary>
        <Link
          className={cn(
            "z-10 text-black/65 transition-all",
            pathname == "/ekibimiz" ? "text-black" : ""
          )}
          href={"/ekibimiz"}
        >
          Ekibimiz
        </Link>
      </summary>
      <ul>
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
