import Link from "./Link";
function Sidebar() {

  const Links = [
    { text: "DropDown", path: "/DropDown" },
    { text: "Buttons", path: "/Buttons" },
    { text: "Accordion", path: "/Accordion" },
    { text: "Table", path: "/Table" },
    { text: "Modal", path: "/Modal" },
    { text: "Count", path: "/Count" },
  ];
  const renderedElements = Links.map((link) => {
    return (
      <Link
        key={link.text}
        to={link.path}
        className={" mb-3"}
        activeElementStyle={"font-bold border-l-4 border-blue-500 pl-2"}
      >
        {link.text}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedElements}
    </div>
  );
}
export default Sidebar;
