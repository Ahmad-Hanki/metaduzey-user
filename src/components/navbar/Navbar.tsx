import Link from "next/link";
import Container from "../ui/Container";
import Logo from "./Logo";
import PhoneNav from "./PhoneNav/PhoneNav";
import PcNavbar from "./PcNav/PcNavbar";
import { Separator } from "../ui/separator";
import getTherapies from "@/actions/getTherapies";
import getTypes from "@/actions/getTypes";

const Navbar = async () => {
  const therapy = await getTherapies();
  const phoneNumber = " +90 532 225 61 20";

  const therapistNamesAndIds = therapy.map((therapist) => ({
    id: therapist.id,
    name: therapist.name,
  }));
  const types = await getTypes();

  return (
    <>
      <Container>
        <div className="flex justify-between items-center ">
          <Logo data={therapy} types={types} />

          <div className="xl:hidden ">
            <PhoneNav data={therapistNamesAndIds} />
          </div>
          <div className="hidden xl:flex gap-10 xl:items-center">
            <Link
              className="text-primary hover:text-amber-800/65 text-2xl"
              href={`tel:${phoneNumber}`}
            >
              {phoneNumber}
            </Link>
            <Link className="btn tracking-wider" href={`/randevu-al`}>
              Randevu-al
            </Link>
          </div>
        </div>

        <div className="hidden xl:flex justify-center flex-col items-center gap-1 z-10">
          <Separator />
          <PcNavbar data={therapistNamesAndIds} />
        </div>
      </Container>
    </>
  );
};

export default Navbar;
