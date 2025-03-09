import { useState } from "react";
import DropDown from "../Components/DropDown";
function DropDownPage() {
  const options = [
    { label: "red option", value: "red" },
    { label: "green option", value: "green" },
    { label: "blue option", value: "blue" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const selectionHandler = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className="flex">
      <DropDown
        options={options}
        value={selectedOption}
        onchange={selectionHandler}
      />
    </div>
  );
}

export default DropDownPage;
