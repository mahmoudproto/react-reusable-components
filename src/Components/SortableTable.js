import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import Table from "./Table";
import useSort from "../hooks/useSort";

function SortableTable(props) {
  const { columsConfig, data } = props;
  const { sortOrder, sortBy, sortedData, sortWith } = useSort(data, columsConfig);

  const getIcons = (label) => {
    if (label !== sortBy)
      return (
        <div>
          <FaSortUp />
          <FaSortDown />
        </div>
      );
    else if (sortOrder === "asc") return <FaSortUp />;
    else if (sortOrder === "desc") return <FaSortDown />;
    return;
  };

  const updatedConfig = columsConfig.map((column) => {
    if (!column.sortFunction) return column;
    else
      return {
        ...column,
        header: () => (
          <th
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => sortWith(column.label)}
          >
            <div className="flex items-center">
              {getIcons(column.label)}
              {column.label}
            </div>
          </th>
        ),
      };
  });

  return <Table {...props} columsConfig={updatedConfig} data={sortedData}></Table>;
}
export default SortableTable;
