import { Linkedin, Mail } from "lucide-react";
import Container from "../ui/Container";
import Link from "next/link";
import { Facebook02Icon } from "@/assets/icons/Faceook";
import { InstagramIcon } from "@/assets/icons/Instagram";
import { NewTwitterIcon } from "@/assets/icons/X";

const HeaderNav = () => {
  return (
    <div className="hidden bg-blue-800/65 xl:block">
      <Container>
        <div className="flex justify-between py-2">
          <div className="flex gap-1">
            <Mail color="white" size={25} />
            <Link
              className="text-white"
              href={"mailto:info@metaduzey.com?subject=Hello! there,"}
            >
              info@metaduzey.com
            </Link>
          </div>
          <div className="flex gap-5">
            <p className="text-white">
            Selimiye, Selimiye İskele Cd. Hilal Apartmanı D:41-43, Daire No: 9, 34668 Üsküdar/İstanbul            </p>
            <div className="flex gap-1">
              <Link
                href={"https://www.facebook.com/metaduzeypsy"}
                className="text-white hover:text-black/65 transition-colors"
              >
                <Facebook02Icon width={18} className="text-inherit" />
              </Link>
              <Link
                href={"https://www.instagram.com/metaduzeypsy"}
                className="text-white hover:text-black/65 transition-colors"
              >
                <InstagramIcon width={18} className="text-inherit" />
              </Link>
              <Link
                href={"https://www.metaduzey.com/"}
                className="text-white hover:text-black/65 transition-colors"
              >
                {" "}
                <Linkedin width={18} className="text-inherit font-extralight" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderNav;
