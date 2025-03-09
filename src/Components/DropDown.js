import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function DropDown({ options, value, onchange }) {
  const [isOpened, setisOpened] = useState(false);
  const dropdownDiv = useRef();

  const handleClick = () => {
    setisOpened(!isOpened);
  };

  const handleOptionSelection = (selectedOption) => {
    setisOpened(false);
    onchange(selectedOption);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionSelection(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  useEffect(() => {
    const handleClick = (event) => {
      if (!dropdownDiv.current) return;
      if (!dropdownDiv.current.contains(event.target)) setisOpened(false);
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={dropdownDiv} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."} <GoChevronDown />
      </Panel>
      {isOpened && (
        <Panel className="absolute top-full ">{renderedOptions}</Panel>
      )}
    </div>
  );
}
export default DropDown;
