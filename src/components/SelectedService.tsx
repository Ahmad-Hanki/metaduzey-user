import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

export function SelectedService() {
  const Services = [
    { name: 'Almaya düşündüğünüz hizmet', id: "" },
    { name: 'Bireysel Terapi', id: "Bireysel Terapi" },
    { name: 'Çift/Aile Terapisi', id: "Çift/Aile Terapisi" },
    { name: 'Çocuk/Ergen Terapisi', id: "Çocuk/Ergen Terapisi" },
  ];

  const [selectedService, setSelectedService] = useState<string >("");



  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="h-full">
        <Button className="flex-1 aspect-[1/0.16]" variant="outline">
          {selectedService.length>1 ?selectedService :'Select service'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96">
        <DropdownMenuLabel className="">Therapy Services</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedService}
          onValueChange={setSelectedService}
        >
          {Services.map((service) => (
            <DropdownMenuRadioItem
              key={service.id}
              value={service.id}
            >
              {service.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
      <input
        type="text"
        readOnly
        value={selectedService}
        name="service"
        hidden
      />
    </DropdownMenu>
  );
}
