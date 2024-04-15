import { useEffect, useState } from "react";

export function PlaceSelected() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);

  return (
    <div className="flex gap-3 justify-center">
      <div className="flex h-12 gap-2 justify-center items-center">
        <input
          type="radio"
          id="online"
          name="place"
          value="online"
          className="radio bg-black/15"
          checked={selectedValue === "online"}
          onChange={handleRadioChange}
        />
        <label htmlFor="online">Online</label>
      </div>
      <div className="flex h-12 gap-2 justify-center items-center">
        <input
          type="radio"
          id="yüzyüze"
          name="place"
          value="yüzyüze"
          className="radio bg-black/15"
          checked={selectedValue === "yüzyüze"}
          onChange={handleRadioChange}
        />
        <label htmlFor="yüzyüze">Yüzyüze</label>
      </div>
      <div className="flex h-12 gap-2 justify-center items-center">
        <input
          type="radio"
          id="farkEtmez"
          name="place"
          value="farkEtmez"
          className="radio bg-black/15"
          checked={selectedValue === "farkEtmez"}
          onChange={handleRadioChange}
        />
        <label htmlFor="farkEtmez">Fark Etmez</label>
      </div>
      <input
        type="hidden"
        name="selectedValue"
        value={selectedValue}
        readOnly
      />
    </div>
  );
}
