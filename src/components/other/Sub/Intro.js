import { useState } from "react";
import Pagetitle from "../../components_btn/Pagetitle";
function Intro() {
  const [clicked, setClicked] = useState(null)
    return (
            <div>
                <Pagetitle value={'회사소개'} svalue={'Company introduction'}/>
                <div className="flex innerdiv">
                    <div onClick={e=>setClicked(0)} className={clicked==0 ? "clicked inntertab" : 'inntertab'}><span>CEO 인사말</span></div>
                    <div onClick={e=>setClicked(1)}  className={clicked==1 ? "clicked inntertab" : 'inntertab'}><span>회사연혁</span></div>
                </div>

            </div>
        );
  }
  
  export default Intro;
  