import Route from "./Components/Route";
import Sidebar from "./Components/Sidebar";
import AccordionPage from "./Pages/AccordionPage";
import DropDownPage from "./Pages/DropDownPage";
import ButtonPage from "./Pages/ButtonPage";
import ModalPage from "./Pages/ModalPage";
import TablePage from "./Pages/TablePage";
import CounterPage from "./Pages/CounterPage";

function APP() {
  
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path={"/DropDown"}>
          <DropDownPage />
        </Route>
        <Route path={"/Accordion"}>
          <AccordionPage />
        </Route>
        <Route path={"/Buttons"}>
          <ButtonPage />
        </Route>
        <Route path={"/Table"}>
          <TablePage />
        </Route>
        <Route path={"/Modal"}>
          <ModalPage />
        </Route>
        <Route path={"/Count"}>
          <CounterPage />
        </Route>
      </div>
    </div>
  );
}

export default APP;
