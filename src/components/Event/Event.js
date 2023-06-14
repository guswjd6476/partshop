import { useEffect } from "react";
import Pagetitle from "../components_btn/Pagetitle";

function Event({setBack}) {
  useEffect(()=>{setBack(true)},[])
  return (
    <div className="Event displaybox main">
       <Pagetitle value={'이벤트'} svalue={'다양한 이벤트와 혜택을 만나보세요'} center='true'/>
    </div>
  );
}

export default Event;
