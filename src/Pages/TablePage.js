import SortableTable from "../Components/SortableTable";

const columsConfig = [
  {
    label: "fruit name",
    render: (object) => object.name,
    sortFunction: (object) => object.name,
  },
  {
    label: "color",
    render: (object) => <div className={`p-3 m-2 ${object.color}`}></div>,
  },
  {
    label: "count",
    render: (object) => object.count,
    sortFunction: (object) => object.count,
  },
  {
    label: "className",
    render: (object) => "bg-" + object.name + "-300"
  },
];

const data = [
  { name: "orange", color: "bg-orange-300", count: 3 },
  { name: "blue", color: "bg-blue-300", count: 4 },
  { name: "green", color: "bg-green-300", count: 1 },
  { name: "yellow", color: "bg-yellow-300", count: 900 },
];

const keyFn = (rowData) => {
  return rowData.name;
};

function TablePage() {
  return (
    <SortableTable
      data={data}
      columsConfig={columsConfig}
      keyFn={keyFn}
    ></SortableTable>
  );
}
export default TablePage;
