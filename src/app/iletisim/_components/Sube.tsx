import Container from "@/components/ui/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Map, Phone, TowerControl, Mail } from "lucide-react";
const Sube = () => {
  const SubeList = [
    {
      name: "Adres",
      content:
        "Selimiye, Selimiye İskele Cd. Hilal Apartmanı D:41-43, Daire No: 9, 34668      ",
      extraContent: "Selimiye / Üsküdar      ",
      icon: <Map />,
    },
    {
      name: "Telefon",
      content: "0532 225 61 20",
      icon: <Phone />,
    },
    {
      name: "Gsm",
      content: "0532 225 61 20",
      icon: <TowerControl />,
    },
    {
      name: "E-Mail Adresi",
      content: "info@metaduzey.com",
      icon: <Mail />,
    },
  ];
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-center font-extrabold text-4xl pb-16">Şube</h1>
        <div className="grid grid-cols-1  lg:grid-cols-2  xl:grid-cols-4 gap-7 ">
          {SubeList.map((Sube) => {
            return (
              <Card key={Sube.content} className="">
                <CardContent className="flex justify-between items-center p-7 h-full rounded-lg">
                  <div>
                    <CardTitle>{Sube.name}</CardTitle>
                    <CardDescription>{Sube.content}</CardDescription>
                    {Sube.extraContent && (
                      <CardDescription>{Sube.extraContent}</CardDescription>
                    )}
                  </div>
                  <div>{Sube.icon}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <Separator className="p-1" />
      </Container>
    </div>
  );
};

export default Sube;
