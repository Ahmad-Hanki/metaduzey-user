import { cn } from "@/lib/utils";
import Link from "next/link";
import Container from "./ui/Container";

const HizmetlerimizButtons = () => {
  const Buttons = [
    { name: "Online Terapi", href: "/hizmetlerimiz/online-terapi" },
    { name: "Bireysel Terapi", href: "/hizmetlerimiz/psikolojik-danismanlik" },
    { name: "Aile Terapisi", href: "/hizmetlerimiz/aile-terapisi" },
    {
      name: "Oyun Terapisi",
      href: "/hizmetlerimiz/cocuk-ergen-terapisi-danismanligi",
    },
    {
      name: "Çocuk Terapisi",
      href: "/hizmetlerimiz/cocuk-ergen-terapisi-danismanligi",
    },
    {
      name: "Çift Terapisi",
      href: "/hizmetlerimiz/cift-terapisi-evlilik-terapisi",
    },
    { name: "Online Psikolog", href: "/online-psikolog" },
  ];

  return (
    <div className="bg-transparent">
      <Container>
        <div className="flex flex-wrap gap-4 justify-center">
          {Buttons.map((link) => {
            return (
              <Link
                key={link.href}
                className={cn("btn hover:btn-ghost")}
                href={link.href}
              >
                {" "}
                {link.name}
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default HizmetlerimizButtons;
