import { GiAbstract065 } from "react-icons/gi";
import Button from "../Components/Button";

function ButtonPage() {
  return <div>
    <div><Button  className="mb-5" primary outline rounded onClick={()=>{console.log("clicked")}}><GiAbstract065 />Click ME</Button></div>
    <div><Button secondary rounded>buy now</Button></div>
    <div><Button warning>see deal</Button></div>
    <div><Button success outline>add adds</Button></div>
    <div><Button danger>somthing</Button></div>
  </div>;
}

export default ButtonPage;