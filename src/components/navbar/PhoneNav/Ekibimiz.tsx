"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Ekibimiz = () => {
  const pathname = usePathname();



  return (
    <details>
      <summary>
        <Link className="z-10 " href={"/ekibimiz"}>
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
