import FunctionBtn from "../../components_btn/FunctionBtn";
import ProductList from "./ProductList"
import { useState } from "react"
import { Button } from "antd";

const Productbox = (props)=>{
  const [sortOption, setSortOption] = useState("default");
  const [gridstyle, setGridStyle] = useState(0)
    return(
        <>  
        <div className="sortWrap"> 
        <Button className="sortbtn" onClick={e=>props.setOnHide(!props.onhide)}>
        {!props.onhide ? '필터감추기' :'필터보이기' }</Button>
        <FunctionBtn gridstyle={gridstyle} setGridStyle={setGridStyle} sortOption={sortOption} setSortOption ={setSortOption}/>
        </div>
        <ProductList search={props.search}  lastCheck={props.lastCheck} setLastCheck={props.setLastCheck} userId={props.userId} gridstyle={gridstyle} sortOption={sortOption} plist={props.plist} pathnum1={props.pathnum1} pathnum2={props.pathnum2} searchArray={props.searchArray} />
        </>
    )
}
export default Productbox