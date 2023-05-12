
import Searchcomponent from "./Searchcomponent";
import {Button} from 'antd'
import { useState } from "react";
import { UpSquareOutlined,DownSquareOutlined } from '@ant-design/icons';
function SortingWrap(props) {
    
  const sortT = ['inch','brand','material','color']
  const [onhide, setOnHide] = useState(false)
  return (
    <>
    <ul className={onhide ?'sort_box hide':'sort_box'}>
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
  <Button className="sortbtn" onClick={e=>setOnHide(!onhide)}>{!onhide ? <UpSquareOutlined /> :<DownSquareOutlined /> }</Button>
  </>
  );
}

export default SortingWrap;
