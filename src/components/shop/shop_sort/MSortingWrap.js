import { Button } from "antd";
import Searchcomponent from "./Searchcomponent";
import {DownOutlined}from '@ant-design/icons';
import { useState } from "react";
function MSortingWrap(props) {  
  const sortT = ['inch','brand','material','color']
  const [sorts, setSorts] = useState(null)
  const changeOpt = (value) =>{
    if(sorts !=value){
    setSorts(value)
    }
    else{
      setSorts(null)
    }
  }
  const removeValue = (valueToRemove) => {
    const updatedArray = props.searchArray.filter((value) => value !== valueToRemove);
    props.setSearchArray(updatedArray);
  };
  return (
    <>
    <ul className={props.onhide ?'msort_box hide':'msort_box'}>
    {sortT.map((sortType, index) => (
      <li key={index}>
        <Button className="filterbtn" onClick={(e)=>{changeOpt(sortType)}}>{sortType}<DownOutlined /></Button>
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
    
    <Button  className={props.onhide ?'sortbtnss hide':'sortbtnss'} onClick={ e=>{ props.onClick(); setSorts(null)}}>필터적용</Button>  
  </ul>
  {props.searchArray[0] ? 
  <div className="filterwrap">
    {props.searchArray.map((value) => (
        <div key={JSON.stringify(value)} onClick={() => removeValue(value)}>
          {Object.values(value).map((val) => (
            <span key={val}>{val}</span>
          ))}
        </div>
      ))}
  </div>
  :""
}
   
  </>
  );
}

export default MSortingWrap;
