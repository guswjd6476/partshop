import { Button } from "antd";
import Searchcomponent from "./Searchcomponent";
function SortingWrap(props) {  
  const sortT = ['inch','brand','material','color']
  return (
    <>
    <ul className={props.onhide ?'sort_box hide':'sort_box'}>
    {sortT.map((sortType, index) => (
      <li key={index}>
        <p>{sortType}</p>
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
      </li>
      
    ))}
    
    <Button className={props.onhide ?'sortbtns hide':'sortbtns'} onClick={props.onClick}>필터<br/>적용</Button>  
  </ul>
   
  </>
  );
}

export default SortingWrap;
