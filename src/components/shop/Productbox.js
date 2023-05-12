import FunctionBtn from "../components_btn/FunctionBtn";
import ProductList from "./ProductList"
import { useState } from "react"

const Productbox = (props)=>{
    
  const [sortOption, setSortOption] = useState("default");
  const [gridstyle, setGridStyle] = useState(0)
    return(
        <>
        <FunctionBtn gridstyle={gridstyle} setGridStyle={setGridStyle} sortOption={sortOption} setSortOption ={setSortOption}/>
        <ProductList lastCheck={props.lastCheck} setLastCheck={props.setLastCheck} userId={props.userId} gridstyle={gridstyle} sortOption={sortOption} plist={props.plist} pathnum1={props.pathnum1} pathnum2={props.pathnum2} searchArray={props.searchArray} />
        </>
    )
}
export default Productbox