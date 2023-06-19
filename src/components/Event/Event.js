import { useEffect, useState } from "react";
import { Link,useLocation } from "react-router-dom";
import Pagetitle from "../components_btn/Pagetitle";
import { getevent } from '../../service/product';
function Event({setBack}) {
  const location = useLocation();
  const pathnum1 = location.pathname.split('/')[1]

  const [elist, setElist] =useState('')
  useEffect(()=>{
    setBack(true);
    getevent().then(function(response){
      setElist(response.data)
    })
  },[])
  return (
    <div className="Event displaybox main">
       <Pagetitle value={'이벤트'} svalue={'다양한 이벤트와 혜택을 만나보세요'} center='true'/>
       <div className="eventpgCon">
        {elist&&elist.map(value =>
          <Link to={`/${pathnum1}/${value.id}`} className="eventpgWrap" key={value.id}>
            <div className="maineventimg">
              <img src={value.thumb}/>
            </div>
            <div className="eventT">
              {value.title}
            </div>
            <div className="eventD">
              <div>{value.startday.split(" ")[0]}</div> 
              <div>~</div>
              <div>{value.lastday.split(" ")[0]}</div>
            </div>
          </Link>)}
       </div>
    </div>
  );
}

export default Event;
