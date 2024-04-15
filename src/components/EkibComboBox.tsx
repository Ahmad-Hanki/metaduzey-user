"use client";

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
import { useContext, useEffect, useState } from "react";
import TherapiesContext from "@/providers/TherapiesContext";

export function EkibComboBox({ ekibId }: { ekibId?: string }) {
  const { therapies } = useContext(TherapiesContext);
  const [selectedTherapyId, setSelectedTherapyId] = useState(ekibId ?? "");
  const name = therapies.find(ther => ther.id === selectedTherapyId)?.name;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="h-full">
        <Button className="flex-1 aspect-[1/0.16]" variant="outline">
          {selectedTherapyId.length > 1 ? name : "Select therapy"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96">
        <DropdownMenuLabel className="">Therapy Selection</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedTherapyId}
          onValueChange={setSelectedTherapyId}
        >
          {therapies &&
            therapies.map((therapy) => (
              <DropdownMenuRadioItem
                key={therapy.id}
                value={therapy.id}
                disabled={ekibId !== undefined}
              >
                {therapy.name}
              </DropdownMenuRadioItem>
            ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
      <input
        type="text"
        readOnly
        value={selectedTherapyId}
        name="therapy"
        hidden
      />
    </DropdownMenu>
  );
}
