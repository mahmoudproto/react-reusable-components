import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

function Link({ to, children,className,activeElementStyle }) {
  const { navigate,currentPath } = useNavigation();
const finalClassName=classNames(className,"text-blue-500",
currentPath===to && activeElementStyle
);
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={finalClassName} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
export default Link;
