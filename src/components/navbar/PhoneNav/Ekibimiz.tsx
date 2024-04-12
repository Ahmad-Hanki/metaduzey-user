"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface nameAndId{
  name:string,
  id:string
}

interface ekibibmizProps {
  data: nameAndId[];
}

const Ekibimiz = ({ data }: ekibibmizProps) => {
  const pathname = usePathname();

  return (
    <details>
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
    </details>
  );
};

export default Ekibimiz;
