"use client";
import Ekibimiz from "./Ekibimiz";
import { Menu } from "lucide-react";
import EkHizmetlerimiz from "./Ek-hizmetlerimiz";
import MainPage from "./MainPage";
import { Separator } from "../../ui/separator";
import Links from "./Links";
import Link from "next/link";

interface PhoneNavProps {
  name: string;
  id: string;
}

interface PhoneNav {
  data: PhoneNavProps[];
}

const PhoneNav = ({ data }: PhoneNav) => {
  return (
    <div className="dropdown dropdown-end bg-transparent text-black z-20">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 bg-transparent hover:bg-slate-300 border-none shadow-lg"
      >
        <Menu size={20} className="bg-transparent " />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-slate-100 rounded-box w-96 lg:w-96"
      >
        <li>
          <MainPage />
        </li>
        <Separator />
        <li>
          <Ekibimiz data={data} />
        </li>
        <Separator />
        <Links />
        <Separator />
        <li>
          <EkHizmetlerimiz />
        </li>
        <Separator />
        <li><Link className="btn w-full" href={'randevu-al'}>Randevu al</Link></li>
      </ul>
    </div>
  );
};

export default PhoneNav;
