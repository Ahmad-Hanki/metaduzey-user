import Link from "next/link";
import Container from "../ui/Container";
import Logo from "./Logo";
import PhoneNav from "./PhoneNav/PhoneNav";
import PcNavbar from "./PcNav/PcNavbar";
import { Separator } from "../ui/separator";

const Navbar = () => {
  const phoneNumber = "+90 532 225 61 20";

  return (
    <div>
      <Container>
        <div className="flex justify-between items-center ">
          <Logo />

          <div className="xl:hidden ">
            <PhoneNav />
          </div>
          <div className="hidden xl:flex gap-10 xl:items-center">
            <Link
              className="text-primary hover:text-amber-800/65 text-2xl"
              href={`tel:${phoneNumber}`}
            >
              +90 533 501 70 40
            </Link>
            <Link className="btn tracking-wider" href={`/randevu-al`}>
              Randevu-al
            </Link>
          </div>
        </div>

        <div className="hidden xl:flex justify-center flex-col items-center gap-1 z-10">
          <Separator/>
          <PcNavbar />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
