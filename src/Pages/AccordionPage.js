import Accordion from "../Components/Accordion";

function AccordionPage() {
  const accordionItems = [
    {
      id: "sdfaf",
      label: "some item 1",
      content:
        "this is a valiable item this is a valiable item this is a valiable item this is a valiable item this is a valiable item ",
    },
    {
      id: "sdfasf",
      label: "some item 2",
      content:
        "this is a valiable item this is a valiable item this is a valiable item this is a valiable item this is a valiable item ",
    },
    {
      id: "sssdfaf",
      label: "some item 3",
      content:
        "this is a valiable item this is a valiable item this is a valiable item this is a valiable item this is a valiable item ",
    },
    {
      id: "sdfasfqaf",
      label: "some item 4",
      content:
        "this is a valiable item this is a valiable item this is a valiable item this is a valiable item this is a valiable item ",
    },
  ];
  return <Accordion items={accordionItems}></Accordion>;
}
 export default AccordionPage;