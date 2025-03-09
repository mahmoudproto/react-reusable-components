import { useState } from "react";

function useSort(data,config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const sortWith = (label) => {
    if (sortBy !== label) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
    console.log("sort " + label);
  };

  let sortedData = data;
  if (sortBy && sortOrder) {
    const { sortFunction } = config.find((data) => data.label === sortBy);
    const orderModifier = sortOrder === "asc" ? 1 : -1;
    sortedData.sort((a, b) => {
      const valueA = sortFunction(a);
      const valueB = sortFunction(b);
      if (typeof valueA === "string")
        return valueA.localeCompare(valueB) * orderModifier;
      else return (valueA - valueB) * orderModifier;
    });
  }

  return {
    sortOrder,
    sortBy,
    sortedData,
    sortWith
  };
}

export default useSort;
