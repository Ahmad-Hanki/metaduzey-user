import Link from "next/link";
import Container from "../ui/Container";
import Logo from "./Logo";
import PhoneNav from "./PhoneNav/PhoneNav";
import PcNavbar from "./PcNav/PcNavbar";
import { Separator } from "../ui/separator";
import getTherapies from "@/actions/getTherapies";
import getTypes from "@/actions/getTypes";
import getBlogs from "@/actions/getBlogs";
import prisma from "@/db/client";

const Navbar = async () => {
  const therapy = await getTherapies();
  await prisma.$disconnect();
  const phoneNumber = " +90 532 225 61 20";

  const therapistNamesAndIds = therapy.map((therapist) => ({
    id: therapist.id,
    name: therapist.name,
  }));

  const blogs = await getBlogs();
  await prisma.$disconnect();

  const types = await getTypes();
  await prisma.$disconnect();

  return (
    <>
      <Container>
        <div className="flex justify-between pb-3 items-center ">
          <Logo data={therapy} types={types} blogs={blogs} />

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
