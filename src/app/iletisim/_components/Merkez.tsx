import Container from "@/components/ui/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Map, Phone, TowerControl, Mail } from "lucide-react";
const Merkez = () => {
  const MerkezList = [
    {
      name: "Adres",
      content: "Atatürk, Yayla Sk. No:20 Kat 2 Daire 2, 34764",
      extraContent: "Ümraniye / İstanbul",
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
        <h1 className="text-center font-extrabold text-4xl pb-16">Merkez</h1>
        <div className="grid grid-cols-1  lg:grid-cols-2  xl:grid-cols-4 gap-7 ">
          {MerkezList.map((merkez) => {
            return (
              <Card key={merkez.content} className="">
                <CardContent className="flex justify-between items-center p-7 h-full rounded-lg">
                  <div>
                    <CardTitle>{merkez.name}</CardTitle>
                    <CardDescription>{merkez.content}</CardDescription>
                    {merkez.extraContent && (
                      <CardDescription>{merkez.extraContent}</CardDescription>
                    )}
                  </div>
                  <div>{merkez.icon}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <Separator className="p-1"/>
      </Container>
    </div>
  );
};

export default Merkez;
