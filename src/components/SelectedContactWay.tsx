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

export function SelectedContact() {
  const contacts = [
    { name: "Size hangi yolla geri dönüş yapmamız isterseiniz?", id: "" },
    { name: "E-posta", id: "E-posta" },
    { name: "Telefon", id: "Telefon" },
  ];

  const [selectedContact, setSelectedContact] = useState<string>("");

  useEffect(() => {
    console.log(selectedContact);
  }, [selectedContact]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="h-full">
        <Button className="flex-1 aspect-[1/0.16]" variant="outline">
          {selectedContact.length > 1 ? selectedContact : "Select Contact way"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96">
        <DropdownMenuLabel className="">Contact way</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedContact}
          onValueChange={setSelectedContact}
        >
          {contacts.map((contact) => (
            <DropdownMenuRadioItem key={contact.id} value={contact.id}>
              {contact.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
      <input
        type="text"
        readOnly
        value={selectedContact}
        name="contact"
        hidden
      />
    </DropdownMenu>
  );
}
