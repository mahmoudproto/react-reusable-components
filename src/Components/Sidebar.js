import Link from "./Link";
function Sidebar() {
  const Links = [
    { text: "DropDown", path: "/" },
    { text: "buttons", path: "/buttons" },
    { text: "accordion", path: "/accordion" },
    { text: "table", path: "/table" },
    { text: "modal", path: "/modal" },
    { text: "count", path: "/count" }
  ];
  const renderedElements = Links.map((link) => {
   return <Link  key={link.text} to={link.path} className={" mb-3"} activeElementStyle={"font-bold border-l-4 border-blue-500 pl-2"}>
      {link.text}
    </Link>;
  });
  return <div
  className="sticky top-0 overflow-y-scroll flex flex-col items-start">{renderedElements}</div>;
}
export default Sidebar;
