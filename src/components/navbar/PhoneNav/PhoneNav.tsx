import Ekibimiz from "./Ekibimiz";
import { Menu } from "lucide-react";
import Hizmetlerimiz from "./Hizmetlerimiz";
import EkHizmetlerimiz from "./Ek-hizmetlerimiz";
import MainPage from "./MainPage";
import { Separator } from "../../ui/separator";
import Links from "./Links";
const PhoneNav = () => {
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
          <Ekibimiz />
        </li>
        <Separator />
        <li>
          <Hizmetlerimiz />
        </li>
        <Separator />
        <li>
          <EkHizmetlerimiz />
        </li>
        <Separator />
        <Links />
      </ul>
    </div>
  );
};

export default PhoneNav;
