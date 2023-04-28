
import Searchcomponent from "./Searchcomponent";
import {Button} from 'antd'
import { useState } from "react";
function SortingWrap(props) {
    
  const sortT = ['inch','brand','material','color']
  const [onhide, setOnHide] = useState(false)
  return (
    <>
    <ul className={onhide ?'sort_box_hide':'sort_box'}>
    {sortT.map((sortType, index) => (
      <li key={index}>
        <p>{sortType}</p>
        <Searchcomponent
          searchArray={props.searchArray}
          setSearchArray={props.setSearchArray}
          pathnum1={props.pathnum1}
          pathnum2={props.pathnum2}
          sortT={sortType}
        />
      </li>
    ))}
  </ul>
  <Button className="sortbtn" onClick={e=>setOnHide(!onhide)}>버튼</Button>
  </>
  );
}

export default SortingWrap;
