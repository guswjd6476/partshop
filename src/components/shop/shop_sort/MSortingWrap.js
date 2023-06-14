import { Button } from "antd";
import Searchcomponent from "./Searchcomponent";
import { useState } from "react";
function MSortingWrap(props) {  
  const sortT = ['inch','brand','material','color']
  const [sorts, setSorts] = useState(null)
  return (
    <>
    <ul className={props.onhide ?'msort_box hide':'msort_box'}>
    {sortT.map((sortType, index) => (
      <li key={index}>
        <Button onClick={(e)=>{setSorts(sortType)}}>{sortType}</Button>
        {sortType === sorts ? 
        <div className="mobile_sort">
        <Searchcomponent
          searchArray={props.searchArray}
          searchResult={props.searchResult}
          setSearchArray={props.setSearchArray}
          setSearchResult={props.setSearchResult}
          pathnum1={props.pathnum1}
          pathnum2={props.pathnum2}
          sortT={sortType}
          num={props.num}
        />
        </div>
        :''
        }
      </li>
      
    ))}
    
    <Button className={props.onhide ?'sortbtnss hide':'sortbtnss'} onClick={props.onClick}>필터적용</Button>  
  </ul>
   
  </>
  );
}

export default MSortingWrap;
