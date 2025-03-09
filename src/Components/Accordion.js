import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

function Accordion({ items }) {
  const [expandedindex, setExpandedIndex] = useState(-1);

function handleClick(index){
    setExpandedIndex(current=>{
        if(current===index)
            return -1;
        else
        return index;
    })
    // if(expandedindex===index)
    //     setExpandedIndex(-1);
    // else
    // setExpandedIndex(index);
}

const renderedItems = items.map((item, index) => {

    const isExpanded = index === expandedindex;
    const icon=<span className="text-xl">{isExpanded? <FaChevronDown/>:<FaChevronLeft/>}</span>
    return (
      <div key={item.id}>
        <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" 
        onClick={()=>handleClick(index)}>{item.label} {icon}</div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  
});

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}
export default Accordion;
