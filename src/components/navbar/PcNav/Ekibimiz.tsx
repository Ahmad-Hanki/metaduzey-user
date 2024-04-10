"use client";

import { cn } from "@/lib/utils";
import { TherapyPlace } from "@/types/types";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface ekibibmizProps {
  data: TherapyPlace[];
}

const Ekibimiz = ({ data }: ekibibmizProps) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
      <div className="bg-inherit pt-3 cursor-default">
        <ul className="  bg-white z-20 w-52 space-y-3">
          {data.map((ekib) => {
            return (
              <li key={ekib.id}>
                <Link
                  className={cn(
                    "z-10 text-black/65 transition-all hover:text-black/90",
                    pathname == `/ekibimiz/${ekib.id}` ? "text-black" : ""
                  )}
                  href={`/ekibimiz/${ekib.id}`}
                >
                  {ekib.name}
                </Link>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </details>
  );
};

export default Ekibimiz;
